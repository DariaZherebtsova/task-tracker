import axios from 'axios';

axios.interceptors.request.use((config) => {
  if (config && config.headers) {
    config.baseURL = import.meta.env.VITE_API_BASE_URL;
  }
  return config;
});

axios.interceptors.response.use(undefined, async (error) => {
  // const authStore = useAuthStore()
  if (!axios.isCancel(error) && [401, 403].includes(error?.response?.status)) {
    // authStore.logout()
    // window.location.reload()
    console.error(error);
  }
  return Promise.reject(error);
});
