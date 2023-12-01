import React from 'react'

function getYear () {
    const currentYear = new Date().getFullYear();
    return currentYear;
}
export default function Footer() {
    const currentYear = getYear();
  return (
    <>
       <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 p-5 m-5 border-top">
            <div className="col mb-3">
                <a href="index.html" className="d-flex align-items-center m-3 link-dark text-decoration-none">
                    <h1 className='text-primary fw-bold fs-1'>Kelontong</h1>
                </a>
                <p className="text-muted">All Rights Reserved</p>
                <p className="text-muted">© { currentYear }</p>
            </div>

            <div className="col mb-3">
            </div>

            <div className="col mb-2">
                <h2>Tentang</h2>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kelontong</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mitra Blog</a></li>
                </ul>
            </div>

            <div className="col mb-2">
                <h2>Jual Beli</h2>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Edukasi Seller</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kelontong COD</a></li>
                    </ul>
        </div>

            <div className="col mb-2">
                <h2>Bantuan & Panduan</h2>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Costumer Care</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Syarat & Ketentuan</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kebijakan Privasi</a></li>
                </ul>
            </div>
        </footer>  
    </>
  )
}
