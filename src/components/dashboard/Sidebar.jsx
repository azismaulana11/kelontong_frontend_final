import { Link } from "react-router-dom";
import homeIcon from '../../assets/img/dashboard/home.svg'
import produkIcon from '../../assets/img/dashboard/produk.svg'
import penjualanIcon from '../../assets/img/dashboard/penjualan.svg'
import settingsIcon from '../../assets/img/dashboard/gear.svg'
import arrowDown from '../../assets/img/dashboard/arrow-down.svg'

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <div className={`sidebar d-lg-block ${isSidebarOpen ? "position-fixed z-3 top-0 bottom-0" : "d-none"}`}>
            <nav className="h-100 d-flex flex-column p-5" style={{ backgroundColor: "#212B36", width: "250px" }}>
                <div className="d-flex d-lg-none justify-content-center mb-4">
                    <i className="bi bi-x-lg text-light fs-2" role="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}></i>
                </div>
                <div className="text-light pb-4" style={{ fontWeight: "900", fontSize: "26px" }}>Kelontong</div>
                <form className="d-sm-none mb-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" required />
                </form>
                <div className="d-flex flex-column row-gap-3">
                    <Link to={"/dashboard"}><span className="sidebar__link"><img src={homeIcon} alt="" /> Dashboard</span></Link>
                    <Link to={"/dashboard/products"}><span className="sidebar__link"><img src={produkIcon} alt="" /> Produk</span></Link>
                    <span role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className="sidebar__link">
                        <img src={penjualanIcon} alt="" />
                        <div className="d-flex w-100 align-items-center justify-content-between column-gap-3"> Penjualan <img src={arrowDown} alt="" /></div>
                    </span>
                    <div className="collapse" id="collapseExample">
                        <div className="d-flex flex-column row-gap-3" style={{ paddingLeft: "2rem" }}>
                            <Link to={"/dashboard/sales-statistics"}><span style={{ color: "#919EAB" }}>Statistik Penjualan</span></Link>
                            <Link to={"/dashboard/sold-items"}><span style={{ color: "#919EAB" }}>Barang terjual</span></Link>
                            <Link to={"/dashboard/stock-items"}><span style={{ color: "#919EAB" }}>Stok Barang</span></Link>
                        </div>
                    </div>
                    <span role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample" className="sidebar__link">
                        <img src={settingsIcon} alt="" />
                        <div className="d-flex w-100 align-items-center justify-content-between column-gap-3"> Settings <img src={arrowDown} alt="" /></div>
                    </span>
                    <div className="collapse" id="collapseExample2">
                        <div className="d-flex flex-column row-gap-3" style={{ paddingLeft: "2rem" }}>
                            <Link to={"/dashboard/settings/categories"}><span style={{ color: "#919EAB" }}>Kategori</span></Link>
                            <Link to={"/dashboard/settings/rewards"}><span style={{ color: "#919EAB" }}>Rewarding</span></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}