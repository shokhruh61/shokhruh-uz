// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://190ce5847ef37dd3.mokky.dev",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
