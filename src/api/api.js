import axios from "axios";
import storage from "@/composables/storage";
import store from "@/store";

const api = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${storage.getStorage("token")}`;
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response.status === 401) {
      storage.removeStorage("token");
      store.dispatch("commitShowToast", true);
      setTimeout(() => {
        location.replace("/login");
      }, 2000);
    }

    return Promise.reject(error);
  }
);

export default api;
