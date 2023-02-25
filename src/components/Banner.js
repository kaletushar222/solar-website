import Solar2 from '../images/solar2.jpg';

function Banner() {
    return (
        <section id="hero" class="d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h1>Glaring Evolution Technologies</h1>
                        <h2>Towards a Brighter Tomorrow!!!</h2>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <img src={Solar2} class="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
