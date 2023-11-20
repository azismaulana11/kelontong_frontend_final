import axios from 'axios';

const BASE_URL_API_REGISTER = "http://localhost:7600/api/v1/auth";

const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL_API_REGISTER}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export {
  register
};
