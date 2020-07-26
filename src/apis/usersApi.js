import AxiosService from "../axiosService/axiosService";
import url from "../utils/URL";
export const registerUser = ({ username, password, email }) => {
  console.log(username, password, email);
  return AxiosService.post(`${url}/auth/local/register`, {
    username,
    password,
    email
  });
};

export const loginUser = ({ email, password }) => {
  return AxiosService.post(`${url}/auth/local`, {
    identifier: email,
    password
  });
};
