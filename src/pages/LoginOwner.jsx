import { useState,useEffect } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginData } from '../redux/User/LoginSlicer';
import imgLogo from '../assets/img/logo.jpeg';
import { login } from '../services/index';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import NavbarLogin from '../components/NavbarLogin';

function LoginOwner() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

useEffect(() => {
document.title = 'Login Owner';
}, []);

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await login(email, password);

    if (response.statusCode === 200) {
      if (response.data.role === 'owner') {
        if (response.data.isVerified) {
          Swal.fire({
            title: 'Login berhasil!',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            dispatch(
                setLoginData({
                  isLoggedIn: true,
                  name: response.data.name,
                  user: response.data.user,
                  role: response.data.role,
                  alamat: response.data.alamat,
                  access_token: response.data.access_token,
                  email: response.data.user,
                })
              );
            console.log(response.data);
            
            Cookies.set('role', response.data.role, { expires: 7 });
            Cookies.set('access_token', response.data.access_token, { expires: 7 });
            navigate('/dashboard');
          });
        } else {
          Swal.fire({
            title: 'Login ditolak',
            text: 'Anda belum diverifikasi. Silakan verifikasi akun Anda.',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      } else {
        Swal.fire({
          title: 'Login ditolak',
          text: 'Anda tidak memiliki izin untuk mengakses halaman ini.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    } else if (response.statusCode === 401 && !response.data.isVerified) {
      Swal.fire({
        title: 'Login ditolak',
        text: 'Email Anda belum diverifikasi. Silakan verifikasi akun Anda.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      Swal.fire({
        title: 'Login gagal',
        text: response.data.message || 'Terjadi kesalahan saat login.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  } catch (error) {
    console.error('Error during login:', error);
    Swal.fire({
      title: 'Login gagal',
      text: 'Terjadi kesalahan saat login.',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};

  return (
    <>
      <div className="container vh-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <section className="section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 text-center">
                    <h1 className="text-primary fw-bold text-decoration-none pt-5">
                      <Link to="/">
                        <a className="navbar-brand" href="#">
                          <img src={imgLogo} alt="Kelontong" width="300" height="150"/>
                        </a>
                      </Link>
                    </h1>
                  </div>
                </div>
              </div>

            <NavbarLogin/>
          
              <form onSubmit={handleLogin}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Owner"
                          required={true}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          minLength="8"
                          maxLength="12"
                          placeholder="Your Password"
                          required={true}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <div className="form-check pb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                              />
                              <label className="form-check-label" htmlFor="flexCheckChecked">
                                Remember Me
                              </label>
                              <Link to="/forgot-password">
                              <a className="float-end">Lupa Password?</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary" id="btn_submit">
                        Masuk
                      </button>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row pt-3">
                      <div className="col-12 text-center">
                        <Link to="/register">
                        <span>Belum punya akun?</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginOwner;
