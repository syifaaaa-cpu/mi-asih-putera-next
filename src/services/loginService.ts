import axios from "axios";

export const loginService = {
  login: async () => {
    try {
      const response = await axios.post("/api/login");
      return response.data;
    } catch {
      return null;
    }
  },
};
