import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getProductBySearch } from '../../services';
import Button from '../Button';


export default function Header({ setResults }) {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value)
    getProductBySearch(value, setResults);
  }
  return (
    <>
      <header className='header'>
        <div className='col'>
          <nav className="container-fluid pt-3 pb-3 ps-5 pe-5">
            <div className="navbar navbar-expand-lg col-12 align">
              <div className="row w-100">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <a className="navbar-brand fs-1 text-center" href="#">
                    <h1 className='text-primary fw-bold'>Kelontong</h1>
                  </a>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                  <div className="search-group d-flex">
                    <input id="searchInput" type="text" className="form-control" placeholder="search" aria-label="search" value={input} onChange={(e) => handleChange(e.target.value)} />
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/cart"}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2 bold" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 mt-3 me-0">
                  <Button />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
