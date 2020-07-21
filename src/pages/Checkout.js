import React, { useContext, useState } from "react";
// Context Api
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
// react-router-dom
import { useHistory } from "react-router-dom";
// Components
import EmptyCart from "../components/Cart/EmptyCart";
// react-stripe-elements
import submitOrder from "../strapi/submitOrder";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";
function Checkout(props) {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = useContext(UserContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  let isEmpty = !name || alert.show;

  async function handleSubmit(e) {
    showAlert({ message: "submmiting..." });
    e.preventDefault();
    const response = await props.stripe.createToken();
    const { token } = response;
    if (token) {
      setError("");
      const { id } = token;
      let order = await submitOrder({
        name,
        total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token
      });
      if (order) {
        showAlert({ message: "your order is complete" });
        clearCart();
        history.push("/");
        return;
      } else {
        showAlert({
          message: "there was an error with your order . please try again !",
          type: "danger"
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  }
  if (cart.length < 1) {
    return <EmptyCart />;
  }

  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          order total: <span>${total}</span>
        </h3>
        {/* single input */}
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* end of single input */}
        {/* card element */}
        <div className="stripe-input">
          <label htmlFor="card-element">credit or debit card</label>
          <p className="stripe-info">
            test using this credit card :<span> 4242 4242 4242</span>
            <br />
            enter any 5 digits for the zip code
            <br />
            enter any 3 digits for the CVC
          </p>
        </div>
        {/* end of element */}
        {/* STRIPE ELEMENTS */}
        <CardElement className="card-element"></CardElement>
        {/* Stripe errors */}
        {error && <p className="form-empty">{error}</p>}
        {/* empty value */}
        {isEmpty ? (
          <p className="form-empty">please fill out name field</p>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
}

const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey="pk_test_51GxDwvErvOIL2zGlyciFmH7Qjh78FuAdgIwBpy4WNVmN8iAe6jXhRIAXTfLqm6ufKzMprq9p50kw2ZkQoxrGwbxQ00VmrIRCmc">
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
