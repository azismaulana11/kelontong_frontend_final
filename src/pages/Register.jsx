import { useEffect } from 'react'
import { Link  } from 'react-router-dom';
import imgLogo from '../assets/img/logo.jpeg';

function Register() {
useEffect(() => {
  document.title = 'Regiter';
}, []);
  return (
    <>
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
                          <img src={imgLogo} alt="Kelontong" width="300" height="150"/>
                        </a>
                      </Link>
                  </h1>
                </div>
              </div>
            </div>

            {/* <!-- Register Form --> */}

            <div className="container">
              <div className="row">
                <div className="col">
                  <form action="" method="POST">
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
                                id="nama"
                                placeholder="Full Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="email"
                                required
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
                              />
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
                              />
                            </div>
                          </div>
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
    </>
  )
}

export default Register