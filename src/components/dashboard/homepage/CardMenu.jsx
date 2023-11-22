export default function CardMenu({ title, value, icon }) {
    return (
        <div className="col">
            <div role="button" className="d-lg-flex text-center align-items-center justify-content-between bg-white rounded p-3" style={{}}>
                <div className="">
                    <div>{title}</div>
                    <div className="fw-bold" style={{ fontSize: "42px" }}>{value}</div>
                </div>
                <div className="d-flex text-center justify-content-center align-item-center p-2 rounded w-md-100" >
                    <div style={{ background: "#E0DCFE", width: "30px", height: "30px" }}>
                        <img src={icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}