import { useState } from 'react';
import { forgotPassword } from '../services';
import { Link,useNavigate } from 'react-router-dom';
import imgLogo from '../assets/img/logo.jpeg';
import imgSearch from '../assets/img/search_email.png';
import Swal from 'sweetalert2';

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        try {
            const response = await forgotPassword(email);

            if (response.error) {
                // Email tidak terdaftar
                Swal.fire({
                    title: 'Akun tidak ditemukan',
                    text: 'Email tidak terdaftar. Silakan coba lagi.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            } else {
                // Email terdaftar, tampilkan notifikasi
                Swal.fire({
                    title: 'Reset Password',
                    text: 'Link reset password telah dikirimkan! Silakan cek email Anda.',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                }).then(() => {
                    navigate('/login');
                });
            }
        } catch (error) {
            console.error('Error during forgot password:', error);
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
                                        <Link to="/">
                                            <a className="navbar-brand" href="#">
                                                <img src={imgLogo} alt="Kelontong" width="300" height="150" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row text-center pb-2">
                                    <div className="col">
                                        <img src={imgSearch} alt="" />
                                        <h4>Find Your Account</h4>
                                        <p>find your account with the registered email to send a reset password link</p>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleForgotPassword}>
                                <div className="container">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control rounded-3"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary" id="btn_submit">
                                                Send Email
                                            </button>
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

export default ForgotPassword;
