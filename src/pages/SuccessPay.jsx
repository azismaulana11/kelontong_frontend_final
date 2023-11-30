import { Link } from "react-router-dom";
import doneImg from "../assets/img/chekout/done.svg"
import backImg from "../assets/img/chekout/back.svg"
import starImg from "../assets/img/chekout/star.svg"
import productImg from "../assets/img/chekout/product-1.png"
export default function SuccessPay() {
    return (
        <>
            <nav className="container-fluid p-3 navigation border-bottom border-1 border-black justify-content-between align-items-center">
                <Link className="d-flex column-gap-2 align-items-center text-decoration-none" to={"/"}>
                    <img src={backImg} alt="" style={{ width: "20px" }} />
                    <div className="fw-semibold text-dark">Kembali</div>
                </Link>
            </nav>

            <main className="container">
                <section
                    className="d-flex flex-column justify-content-center align-items-center border-bottom border-black border-1 mb-5" style={{ height: "80vh" }}>

                    <img className="mb-3" src={doneImg} alt="" style={{ width: "150px" }} />
                    <div className="fs-4 fw-semibold">Yeay! pembayaranmu berhasil!</div>
                </section>

                <section className="other__products overflow-x-scroll mb-5">
                    <div className="fs-4 fw-semibold mb-4">Lihat produk lainnya</div>

                    <div className="card-groups d-flex column-gap-5" style={{ width: "fit - content" }}>
                        <div className="card" style={{ width: "280px", background: "#F0F2F5", border: "2px solid #0376CB !important" }}>
                            <div className="row g-0">
                                <div className="col-md-12 pt-4  text-center">

                                    <img src={productImg} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-body d-flex flex-column row-gap-2">
                                        <div className="fw-semibold">Gulaku Hijau 1kg</div>
                                        <div className="fs-3 fw-bold">Rp. 15000</div>
                                        <div className="d-flex align-items-center column-gap-2">
                                            <div>4.5</div>
                                            <div className="d-flex align-items-center">

                                                <img src={starImg} alt="" />

                                                <img src={starImg} alt="" />

                                                <img src={starImg} alt="" />

                                                <img src={starImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </main >
        </>
    )
}