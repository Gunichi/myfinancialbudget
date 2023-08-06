import axios from "axios";

const api = axios.create({
  baseURL: "https://django-nubank-b1e0ca266a24.herokuapp.com",
});

export default api;

