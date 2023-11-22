import axios from "axios"


export const getProductBySearch = async (value,setResults) => {
    try {
      const response = await axios.get('https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product')
      const allProducts = response.data
      const filterProducts =  allProducts.filter((product) => {
        return value && product && product.name && product.name.toLowerCase().includes(value)
      })
      setResults(filterProducts)
       } catch (error) {
      console.log(error);
    }
}


export const postCart = async (id, name, img, price, qty, total) => {
  try {
    const response = await axios.post(
      'https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/cart',
      {
        id: id,
        name: name,
        img: img,
        price: price,
        quantity: qty,
        total: total,
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

