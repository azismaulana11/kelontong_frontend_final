import axios from 'axios'

const BASE_URL_API = "https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product";

const BASE_URL_API_LOGIN_REGISTER = "http://localhost:7600/api/v1/auth";

console.log(BASE_URL_API)

const getProductList = async () => {
    try {
        const url = `${BASE_URL_API}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

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
login,
forgotPassword,
resetPassword
}