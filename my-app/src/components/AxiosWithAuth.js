import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token"); 
  return axios.create({
    baseURL: "https://us04web.zoom.us/j/79903809883?pwd=akx4cmkraHoybm5JcGQrN05Dd0dqdz09",
    headers: {
      Authorization: token
    }
  });
};

console.log(baseURL);

