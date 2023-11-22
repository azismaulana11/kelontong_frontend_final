import { useState } from 'react';
import notifIcon from '../../assets/img/dashboard/bell.svg'
import profileImg from '../../assets/img/dashboard/profile.png'

export default function Topbar({ isSidebarOpen, setIsSidebarOpen }) {
    const [notificationTotal, setNotificationTotal] = useState(0);
    return (
        <div className="topbar">
            <nav className="navbar">
                <div className="container-fluid ">
                    <div className='d-flex align-items-center column-gap-3'>
                        <i className="bi bi-list d-block d-lg-none fs-1"
                            role="button"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        ></i>
                        <form className="d-none d-sm-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ color: "#919EAB" }} required />
                        </form>
                    </div>
                    <div className="d-flex align-items-center column-gap-3">
                        <div role="button" className="position-relative">
                            <img src={notifIcon} alt="" style={{ width: "20px" }} />
                            {
                                notificationTotal > 0 && (
                                    <div className='position-absolute p-2 bg-danger rounded rounded-circle d-flex justify-content-center align-items-center' style={{ width: "10px", height: "10px", fontSize: "10px", top: "-3px", right: "-5px" }}>
                                        {notificationTotal}
                                    </div>
                                )
                            }
                        </div>
                        <div role="button" className='rounded rounded-circle'>
                            <img src={profileImg} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}