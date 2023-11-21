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