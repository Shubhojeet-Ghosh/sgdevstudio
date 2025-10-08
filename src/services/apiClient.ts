// src/services/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_EXPRESS_SERVER_BASE_URL || "http://localhost:3001", // your Express base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔁 Optional: Interceptors for logging, auth tokens, etc.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
