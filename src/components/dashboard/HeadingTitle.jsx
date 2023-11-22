import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const HeadingTitle = ({ title, children }) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })
    return (
        <div className="d-flex align-items-center p-4 justify-content-between position-relative" style={{ height: "80px", backgroundColor: "#624BFF" }}>
            <span className={`fw-bold text-light ${isDesktopOrLaptop ? 'fs-4' : 'fs-6'}`}>{title}</span>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/dashboard" style={{ color: "white"  }}>Dashboard</Link></li>
                    {children}
                </ol>
            </nav>
        </div>
    );
};

export default HeadingTitle;