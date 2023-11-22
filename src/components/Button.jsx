import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { resetLoginData } from '../redux/User/LoginSlicer'; // Sesuaikan path dengan struktur direktori Anda

function Button() {
  const name = Cookies.get('name');
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  // Fungsi untuk logout
  const handleLogout = () => {
    Cookies.remove('name');
    Cookies.remove('access_token');
    dispatch(resetLoginData());

    // Tampilkan SweetAlert 2 setelah logout berhasil
    Swal.fire({
      icon: 'success',
      title: 'Logout Berhasil!',
      showConfirmButton: false,
      timer: 1500, // Waktu notifikasi ditampilkan dalam milidetik (ms)
    });

    // Redirect ke halaman utama setelah beberapa saat
    setTimeout(() => {
      window.location.href = '/'; // Jangan lupa mengganti sesuai kebutuhan
    }, 1500); // Sesuaikan dengan waktu timer SweetAlert
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col ps-lg-5 d-flex justify-content-end">
          {!isLoggedIn && !name && (
            <div className="d-flex">
              <Link to="/login" className="me-2">
                <button type="button" className="btn btn-light border border-primary text-primary">Masuk</button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn btn-primary border border-primary text-light">Daftar</button>
              </Link>
            </div>
          )}

          {isLoggedIn && name && (
            <div className="btn-group">
              <button type="button" className="btn btn-outline-info btn-sm">Selamat datang, {name}!</button>
              <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Button;