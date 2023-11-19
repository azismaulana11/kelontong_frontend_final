import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../assets/img/logo.jpeg';
import { register } from '../services/index';
import Swal from 'sweetalert2';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_2: '',
    alamat: '',
    phone_number: '',
    role: 'customer',
  });

  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (inputPassword) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,12})$/;

    if (!regex.test(inputPassword)) {
      setPasswordError(
        'password harus memiliki panjang 8-12 karakter, mengandung 1 huruf besar, dan 1 simbol (!@#$%^&*)'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleInputChange = (e) => {
    if (e.target.id === 'role') {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value || 'customer',
      });
    } else if (e.target.id === 'phone_number') {
      const numericValue = e.target.value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [e.target.id]: numericValue,
      });
    } else if (e.target.id === 'password') {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
      validatePassword(e.target.value);
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_2) {
      Swal.fire({
        icon: 'error',
        title: 'Password tidak sama silahkan check kembali.',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (passwordError) {
      Swal.fire({
        icon: 'error',
        title: 'Password salah',
        text: passwordError,
        showConfirmButton: true,
      });
      return;
    }

    try {
      const response = await register(formData);

      if (response.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registrasi Berhasil',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate('/login');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registrasi gagal',
          text: response.message,
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Swal.fire({
        icon: 'error',
        title: 'Registrasi gagal silahkan coba lagi nanti.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
  document.title = 'Register Page';
  }, []);

  return (
    <div className="container vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-4 col-sm-12 col-md-12">
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <h1 className="text-primary fw-bold">
                    <Link to="/">
                      <a className="navbar-brand" href="#">
                        <img src={imgLogo} alt="Kelontong" width="300" height="150" />
                      </a>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>

            {/* Register Form */}
            <div className="container">
              <div className="row">
                <div className="col">
                  <form onSubmit={handleSubmit}>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <p>Register</p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="phone_number"
                                placeholder="No.HP"
                                required
                                value={formData.phone_number}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <input
                                type="alamat"
                                className="form-control"
                                id="alamat"
                                placeholder="alamat"
                                required
                                value={formData.alamat}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Your Password"
                                required
                                minLength="8"
                                maxLength="12"
                                value={formData.password}
                                onChange={handleInputChange}
                              />
                              {passwordError && <p className="text-danger">{passwordError}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <input
                                type="password"
                                className="form-control"
                                id="password_2"
                                placeholder="Confirm Password"
                                required
                                minLength="8"
                                maxLength="12"
                                value={formData.password_2}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          {/* Hidden Input for Role */}
                          <input
                            type="hidden"
                            id="role"
                            value={formData.role}
                            onChange={handleInputChange}
                          />
                          <button
                            type="submit"
                            className="btn btn-primary"
                            id="button_submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;
