import axios from "axios";

const request = async (url, method = "GET", data) => {
  try {
    let response;

    if (method === "GET" || method === "get" || !data) {
      response = await axios({
        method,
        url,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    } else {
      response = await axios({
        method,
        url,
        data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    }
    return await response;
  } catch (e) {
    console.log("Error " + e);
    return e.response;
  }
};

export default request;
