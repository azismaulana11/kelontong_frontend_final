import Button from './Button';
import imgCart from '../assets/img/shop-cart.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
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
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="container justify-content-end">
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control" id="search" aria-label="Search" placeholder="Search..." />
                      </div>
                      <div className="col-md-3">
                        <a href="cart.html">
                          <img className="icon__checkout" id="cart" src={imgCart} alt="Cart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <Button/>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
