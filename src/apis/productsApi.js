import axiosService from "../axiosService/axiosService";

export const getProducts = url => {
  return axiosService.get(url);
};
