import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-kcr4.onrender.com', 
});