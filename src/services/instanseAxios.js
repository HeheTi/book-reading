import axios from 'axios';

const BASE_URL_API = process.env.REACT_APP_API_URL;

const instanseAxios = axios.create({
  baseURL: BASE_URL_API,
});

export default instanseAxios;
