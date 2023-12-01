import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Carousell from '../components/Carousell';
import About from '../components/About';
import CardBarang from '../components/CardBarang';
import Footer from '../components/Footer';
import { getProductList } from '../services';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = 'Home Page';

    // Mengambil daftar produk saat komponen dimuat
    async function fetchProducts() {
      try {
        const productList = await getProductList();
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar products={products} />
      <Carousell />
      <About />
      <CardBarang />
      <Footer />
    </>
  );
}

export default Homepage;
