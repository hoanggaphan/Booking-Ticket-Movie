import Axios from "axios";

export const callAPI = (method, uri, data, token) => {
  return Axios({
    method,
    url: `${process.env.REACT_APP_API_URL}/${uri}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
