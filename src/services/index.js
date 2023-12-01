import axios from "axios"

const BASE_URL_API_LOGIN_REGISTER = "http://localhost:7600/api/v1/auth";
const BASE_URL_API = "http://localhost:7600/api/v1/products";


export const getProductBySearch = async (value, setResults) => {
  try {
    const response = await axios.get(`${BASE_URL_API}`)
    const allProducts = response.data
    const filterProducts = allProducts.filter((product) => {
      return value && product && product.name && product.name.toLowerCase().includes(value)
    })
    setResults(filterProducts)
  } catch (error) {
    console.log(error);
  }
}


export const postCart = async (
  product_id, 
  name, 
  image, 
  category, 
  price, 
  qty, 
  subtotal, 
  customer_id, 
  customer_name, 
  alamat, 
  total) => {
  try {
    const response = await axios.post(
      'http://localhost:7600/api/v1/cart',
      {
        product_id: product_id,
        name,
        image,
        category,
        price,
        qty,
        subtotal,
        customer_id,
        customer_name,
        alamat,
        total
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal menambahkan barang ke keranjang');
  }
};


const getProductList = async () => {
  try {
    const url = `${BASE_URL_API}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL_API_LOGIN_REGISTER}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const url_login = `${BASE_URL_API_LOGIN_REGISTER}/login`;
    const response = await axios.post(url_login, { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Tangkap status code dari respon yang diterima
      const statusCode = error.response.status;
      console.log(`HTTP status code: ${statusCode}`);

      // Tangkap pesan error jika ada
      const errorMessage = error.response.data.message;
      console.log(`Error message: ${errorMessage}`);

      // Periksa apakah properti isVerified tersedia dalam respons error
      const errorVerified = error.response.data.isVerified;
      if (errorVerified !== undefined) {
        console.log(`Is Verified: ${errorVerified}`);
      }

    } else {
      console.log('Error:', error.message);
    }

    // Dilemparkan kembali agar dapat dihandle di komponen yang memanggil fungsi login
    throw error;
  }
};

const forgotPassword = async (email) => {
  try {
    const url_forgot = `${BASE_URL_API_LOGIN_REGISTER}/forgot-password`;
    const response = await axios.post(url_forgot, { email });
    return response.data;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      console.log(`HTTP status code: ${statusCode}`);

      if (statusCode === 404) {
        // Email tidak terdaftar
        return { error: 'Email not found' };
      }

      // Tangkap pesan error jika ada
      const errorMessage = error.response.data.message;
      console.log(`Error message: ${errorMessage}`);
    } else {
      console.log('Error:', error.message);
    }

    throw error;
  }
}

const resetPassword = async (email, token, newPassword) => {
  try {
    const url_reset = `${BASE_URL_API_LOGIN_REGISTER}/reset-password`;
    const response = await axios.post(url_reset, { email, token, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error during password reset:', error);
    throw error;
  }
};


export {
  getProductList,
  register,
  login,
  forgotPassword,
  resetPassword
}
