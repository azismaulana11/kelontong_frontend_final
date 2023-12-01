import axios from "axios";

export const fetchCartItems = async () => {
    try {
        const response = await axios.get('https://wild-rose-python-wig.cyclic.app/api/v1/cart');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw new Error('Failed to fetch cart items');
    }
};