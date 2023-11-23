import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductList } from '../services/index';
import '../assets/css/landing-page.css';

function CardBarang() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiProducts = await getProductList();
        console.log('Data API Produk:', apiProducts);

        // Ambil 10 produk pertama dari API
        const first10Products = apiProducts.slice(0, 10);

        // Simpan produk dalam state
        setProducts(first10Products);
      } catch (error) {
        console.error('Gagal mengambil data API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="wrapper">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 col-md-3 col-sm-12">
            <h5>Barang Pilihan Pengguna Baru</h5>
          </div>
          <div className="col-lg-6 col-md-3 col-sm-12 text-end">
            <Link to="/pages/products">Lihat Lebih banyak</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row flex-nowrap overflow-auto" id="productsRow">
          {products.map((product) => (
            <div key={product._id} className="col-lg-4 col-md-6 col-sm-12">
              <Link to={`/details/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card">
                  <div className="card-content">
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">Harga: {product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardBarang;
