import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 20000,
  // headers: {'X-Custom-Header': 'foobar'}
});
