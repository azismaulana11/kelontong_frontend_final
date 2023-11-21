import React, { useState } from 'react';
import Button from './Button';
import imgCart from '../assets/img/shop-cart.png';
import { Link } from 'react-router-dom';

function Navbar({ products }) {
  const [searchResults, setSearchResults] = useState([]);

  // Fungsi handle pencarian
  function handleSearch(event) {
    const query = event.target.value;

    // Lakukan pencarian dan simpan hasilnya di state searchResults
    const results = performSearch(query);
    setSearchResults(results);
  }

  // Fungsi pencarian
  function performSearch(query) {
    return products.filter(product => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  return (
    <div className="container">
      <header className="Header" aria-label="Navbar">
        <div className="col">
          <nav className="container-fluid pt-3 pb-3 ps-5 pe-5">
            <div className="navbar navbar-expand-lg navbar-light bg-light col-12 align">
              <div className="row w-100">
                <div className="col-lg-3 col-md-3 col-sm-12 ps-5">
                  <Link to="/">
                    <a className="navbar-brand text-primary fw-bold">
                      <img alt="Kelontong" />
                    </a>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="search"
                        aria-label="Search"
                        placeholder="Search..."
                        onInput={handleSearch}
                      />
                      {searchResults.length > 0 && (
                        <button
                          className="btn btn-outline-secondary mt-2"
                          onClick={() => setSearchResults([])}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-2">
                <Link to="/cart">
                          <img className="icon__checkout" id="cart" src={imgCart} alt="Cart" />
                </Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <Button />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Tampilkan hasil pencarian */}
      <div className="row justify-content-center mt-3">
        {searchResults.map(product => (
          <div key={product.id} className="card col-lg-3 col-md-4 col-sm-6 m-2">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Category: {product.category}</p>
              <p className="card-text">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
