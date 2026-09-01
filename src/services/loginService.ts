import axios from 'axios';

export const loginService = {
  login: async () => {
    console.log("📌 Calling Golang Login API...");
    
    try {
      const response = await axios.post('/api/login');
      console.log("✅ Login Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Login Error:", error.response?.status || error.message);
      throw new Error(`HTTP ${error.response?.status || 'Unknown'}`);
    }
  }
};