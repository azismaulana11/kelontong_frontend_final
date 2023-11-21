export default function ProgresBar({name, value}) {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold" style={{ fontSize: "18px" }}>{name}</span>
                <span className="fw-bold" style={{ fontSize: "18px" }}>{value}%</span>
            </div>
            <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div className="progress-bar" style={{ width: `${value}%`, background: "#624BFF" }} />
            </div>
        </div>
    )
}