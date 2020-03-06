import Axios from "axios";
import {URL_API} from './../constants/config';

export const callAPI = (method, uri, data, headers) => {
    return Axios({
        method,
        url: `${URL_API}/${uri}`,
        data,
        headers
    })
}