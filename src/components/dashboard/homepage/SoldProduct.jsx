export default function SoldProduct({ product, sold }) {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
                <p className="fs-5 fw-bold">{product}</p>
                <p className="fs-5 fw-bold" style={{ color: "#624BFF" }}>{sold}</p>
            </div>
        </div>
    )
}