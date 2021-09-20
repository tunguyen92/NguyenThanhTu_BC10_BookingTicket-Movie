import axios from "axios";
import { DOMAIN, TOKEN } from "../util/settings/config";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //JWT
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        "Cache-control": "no-store, max-age=0",
      }, //JWT
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        "Access-Control-Allow-Origin": "*",
      }, //JWT
    });
  };
}
