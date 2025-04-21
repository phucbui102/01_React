import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // hoặc bạn hardcode nếu test
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
