import Axios from "axios";
import { URL_API } from "./../constants/config";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const callAPI = (method, uri, data, token) => {
  return Axios({
    method,
    url: `${URL_API}/${uri}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    httpsAgent,
  });
};
