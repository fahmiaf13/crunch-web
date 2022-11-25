import axios from "axios";

const GlobalGet = (args: any) =>
  axios({ ...args, method: "GET" }, { timeout: 5 })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err?.response?.data;
    });
const GlobalPost = (args: any) =>
  axios({ ...args, method: "POST" }, { timeout: 5 })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err?.response?.data;
    });
const GlobalDelete = (args: any) =>
  axios({ ...args, method: "DELETE" })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err?.response?.data;
    });
const GlobalPut = (args: any) =>
  axios({ ...args, method: "PUT" }, { timeout: 10 })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err?.response?.data;
    });

export { GlobalGet, GlobalDelete, GlobalPost, GlobalPut };
