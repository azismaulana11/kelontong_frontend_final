import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Button() {
  const username = Cookies.get('username');

  // Fungsi untuk logout
  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('access_token');
    window.location.href = '/';
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col ps-lg-5 justify-content-end">
          {!username && (
            <>
              <Link to="/login">
                <button type="button" className="btn btn-light border border-primary text-primary">Masuk</button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn btn-primary border border-primary text-light">Daftar</button>
              </Link>
            </>
          )}

          {username && (
            <>
          {/* <!-- Example split danger button --> */}
          <div className="container">
            <div className="row">
              <div className="col">
                  <div className="btn-group">
              <button type="button" className="btn btn-outline-info btn-sm">Selamat datang, {username}!</button>
              <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
              </div>
            </div>
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Button;
