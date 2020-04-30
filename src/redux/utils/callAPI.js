process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import Axios from "axios";
import { URL_API } from "./../constants/config";

export const callAPI = (method, uri, data, token) => {
  return Axios({
    method,
    url: `${URL_API}/${uri}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
