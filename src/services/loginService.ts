export const loginService = {
  login: async () => {
    try {
      console.log('📌 Calling Login API Route...');

      const response = await fetch('/api/login', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Login Response:', data);
      return data;
    } catch (error: any) {
      console.error('❌ Login Error:', {
        message: error.message,
        error: error,
      });
      throw error;
    }
  },
};
