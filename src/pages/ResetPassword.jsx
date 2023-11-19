import imgLogo from '../assets/img/logo.jpeg';
import imgLock from '../assets/img/lock.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { resetPassword } from '../services/index';
import Swal from 'sweetalert2';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Mendapatkan email dan token dari parameter URL
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    const validatePassword = (inputPassword) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,12})$/;

        if (!regex.test(inputPassword)) {
            setPasswordError(
                'Password harus memiliki panjang 8-12 karakter, mengandung setidaknya 1 huruf besar, dan 1 simbol (!@#$%^&*)'
            );
        } else {
            setPasswordError('');
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            // Password tidak sesuai
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password and confirmation password do not match.',
            });
            return;
        }

        validatePassword(password);

        if (passwordError) {
            // Jika ada kesalahan dalam password, hentikan eksekusi
            return;
        }

        try {
            // Panggil fungsi reset password dari service
            const response = await resetPassword(email, token, password);

            if (response.success) {
                // Reset password berhasil
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Password reset successfully!',
                }).then(() => {
                    navigate('/login');
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oopsy..',
                    text: 'Reset password failed. Please try again.',
                });
            }
        } catch (error) {
            console.error('Error during password reset:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oopsy',
                text: 'Error during password reset. Please try again.',
            });
        }
    };

return (
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
                                <img src={imgLock} alt="" />
                                <h4>Reset Your Password</h4>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleResetPassword}>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-12 col-md-12 col-sm-12 pb-3">
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control rounded-3"
                                            id="password"
                                            minLength="8"
                                            maxLength="12"
                                            placeholder="Your New Password"
                                            required
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                validatePassword(e.target.value);
                                            }}
                                        />
                                        {passwordError && <p className="text-danger">{passwordError}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control rounded-3"
                                            id="confirmPassword"
                                            minLength="8"
                                            maxLength="12"
                                            placeholder="Re-Type"
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    id="btn_submit"
                                                >
                                                    Confirm
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
);
}

export default ResetPassword;
