function getCurrentYear () {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

function Footer() {
  const currentYear = getCurrentYear();
  return (
    // <!-- Footer Section -->
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <footer className="row row-cols-lg-5 row-cols-sm-6 row-cols-md-5 py-5 my-5 border-top-0 ps-5">
        <div className="col">
          <a href="index.html" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
           <h1 className="text-primary fw-bold">Kelontong</h1>
          </a>
          <p className="text-muted">Allrigh Reserved</p>
          <p className="text-muted">© {currentYear}</p>
        </div>
    
        <div className="col">
    
        </div>
    
        <div className="col">
          <h5>Tentang</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kelontong</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mitra</a></li>
          </ul>
        </div>
    
        <div className="col">
          <h5>Jual dan Beli</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Edukasi Seller</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kelontong COD</a></li>
          </ul>
        </div>
    
        <div className="col">
          <h5>Bantuan & Panduan</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Customer Care</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Syarat & Ketentuan</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kebijakan dan Privasi</a></li>
          </ul>
        </div>
      </footer>
            </div>
        </div>
    </div>
  )
}

export default Footer