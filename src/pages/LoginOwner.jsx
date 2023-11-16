import { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import imgLogo from '../assets/img/logo.jpeg';
import { login } from '../services/index';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import NavbarLogin from '../components/NavbarLogin';

function LoginOwner() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(username, password);

      if (response.statusCode === 200) {
        // Jika login berhasil, munculkan alert
        Swal.fire({
          title: 'Login berhasil!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          console.log(response.data);
          navigate('/');
          localStorage.setItem('access_token', response.data.access_token);
          Cookies.set('access_token', response.data.access_token, { expires: 7 });
          Cookies.set('username', response.data.user, { expires: 7 });
        });
      } else {
        Swal.fire({
          title : 'Login gagal',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    } catch (error) {
      console.error('Error during login:', error);
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
                          type="username"
                          className="form-control"
                          id="username"
                          placeholder="Username Owner"
                          required={true}
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
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
                              <a className="float-end" href="forgot-password.html">Lupa Password?</a>
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
                        <p>Belum punya akun?<a href="register.html">Daftar</a></p>
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
