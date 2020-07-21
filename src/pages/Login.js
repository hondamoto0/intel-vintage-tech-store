import React, { useState, useContext } from "react";
// react-router-dom
import { useHistory } from "react-router-dom";
// handle user
import { registerUser, loginUser } from "../apis/usersApi";
// Context Api
import { UserContext } from "../context/user";
export default function Login() {
  const { userLogin, showAlert } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsMember(prevMember => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  const handleSubmit = async e => {
    let response;
    e.preventDefault();
    if (isMember) {
      try {
        response = await loginUser({ email, password });
      } catch (err) {
        console.log(err);
      }
    } else {
      // nếu người dùng ko phải thành viên => đăng ký
      try {
        response = await registerUser({ email, password, username });
      } catch (err) {
        console.log(err);
      }
    }
    if (response) {
      // nếu server response thì xử lý
      const { data } = response;
      const {
        jwt: token,
        user: { username }
      } = data;
      const newUser = { token, username };
      // show alert success
      showAlert({ message: "Login Thành Công !" });
      userLogin(newUser);
      history.push("/");
    } else {
      // show alert failed
      showAlert({
        message: "Đăng Nhập Thất Bại !",
        type: "danger"
      });
    }
  };

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all form fields</p>
        )}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        {/* register link */}
        <p className="register-link">
          {isMember ? "need to register" : "already a member"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
