import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://secret-family-recipes-bw-team5.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
