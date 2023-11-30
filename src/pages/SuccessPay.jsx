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

        </>
    )
}