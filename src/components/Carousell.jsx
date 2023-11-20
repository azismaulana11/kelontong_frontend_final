import imgKebutuhan from '../assets/img/kebutuhan.jpg'
import imgPromo from '../assets/img/promo.png'
import imgElektro from '../assets/img/elektronik.jpg'


function Carousell() {
  return (
    // <!-- Hero Section -->
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <section className="carousel">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-end align-items-center vh-80 vw-80 pb-1 pt-1"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgKebutuhan} className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item justify-content-center">
                        <img src={imgPromo} className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item justify-content-center">
                    <img src={imgElektro} className="d-block w-100 h-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
</div>
</section>
                </div>
            </div>
        </div>
  )
}

export default Carousell