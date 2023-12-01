const IncrementButton = ({ handleDecrement, handleIncrement, quantity }) => {
    return (
        <div className="qty container mt-5 d-flex justify-content-center">
            <div className="quantity input-group">
                <div className="row ">
                    <div className="col-md-5 d-flex justify-content-center">
                        <button className="minus btn" onClick={handleDecrement}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>
                        <input className="num text-center" value={quantity} readOnly />
                        <button className="plus btn" onClick={handleIncrement}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncrementButton;