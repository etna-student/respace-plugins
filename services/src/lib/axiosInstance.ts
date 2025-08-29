import axios from "axios";

let token: string | null = null;

export function setToken(newToken: string | null) {
  token = newToken;
}

export const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8000",
});

api.interceptors.request.use((config) => {
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
