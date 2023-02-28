import { BookmarkStarFill, Check, CheckCircle, GeoAltFill, EnvelopeAtFill, PhoneFill } from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import Solar3Image from '../assets/images/solar3.jpg';
import Solar5Image from '../assets/images/solar5.jpg';
import ValueImage from '../assets/images/value.jpg';

function Main() {
    return (
        <main id="main">

            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>About Us</h2>
                    </div>

                    <div class="row content">
                        <div class="col-lg-6">
                            <p>
                                Our organization provides turnkey solutions for renewable energy and indigenous energy projects.
                                <br />
                                Our experts specialize in Grid-tie and Off-grid solar power plants designing and installations.
                                <br /><br />
                                The company was incorporated in Pune and has served many private organizations and a few government projects across the nation.
                            </p>
                            <a href="#contact" class="btn-learn-more">Learn More</a>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0">
                            <ul>
                                <li><CheckCircle color="royalblue" />&nbsp; We are an organisation working in solar energy turnkey and EPC projects and have worked with various private as well as government sector enterprises till date.</li>
                                <li><CheckCircle color="royalblue" />&nbsp; We have served a number of clients who are extremely satisfied with our service. Our head person Mr. Harshal Kondhare is an extremely visionary leader who has pursued Master’s degree in Solar Energy from the UK. He also has an industrial experience in the same field for over 2 years in the UK and since then working in India as a consultant for many firms.</li>
                                <li><CheckCircle color="royalblue" />&nbsp; We have worked with various reputed industrial clients including Sandvik Asia Pvt Ltd, Spicer India Ltd, Harman International to name a few.</li>
                                <li><CheckCircle color="royalblue" />&nbsp; We work as system integrator and channel partner of companies such as Polycab solar, sukam solar, Navitas solar etc.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <section id="tie-ups" className='why-us section-bg'>
                <div class="container-fluid" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div class="content">
                                <h3><strong>Tie-ups</strong></h3>
                                <p>
                                    We have been working on various government projects from 2016 and we are registered bidder for Mahaetender online tendering system for State government of Maharashtra as well as various private sector companies.
                                    We are also vendors of leading Manufacturing industries such as Sandvik Asia, Spicer India, Harman International,  Patil Automation Pvt Ltd to name a few.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" >
                            <img src={Solar3Image} class="img-fluid" alt="" style={{ height: "320px" }} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-us" className='why-us'>
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Why Us?</h2>
                    </div>

                    <div class="row content" style={{ padding: "0px" }}>
                        <div class="row">
                            <p>Choosing us for your renewable energy needs means choosing a team of dedicated professionals who are committed to providing top-quality services that are tailored to your unique needs. Here are some reasons why you should choose us:</p>
                        </div>
                        <br /><br /><br /><br />
                        <div className='row'>
                            <ul>
                                <li><Check size={30} color="green" />&nbsp; Over 2 MW of cumulative installation experience</li>
                                <li><Check size={30} color="green" />&nbsp; In house design & infrastructure & Technical Expertise</li>
                                <li><Check size={30} color="green" />&nbsp; One point contact responsibility</li>
                                <li><Check size={30} color="green" />&nbsp; Experienced Liaoning team well aware of process and people to acquire permits for timely completion of projects across India.</li>
                                <li><Check size={30} color="green" />&nbsp; With Significant collaborations, technical know-how support makes us the most preferred power solutions provider to our customers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-mission" className='why-us section-bg'>
                <div class="container-fluid" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div class="content">
                                <h3><strong>Our Mission</strong></h3>
                                <p>
                                    Our goal is to become the leading consulting firm Renewable Energy Sector by giving our client timely superior quality service and help them earn thee due profit. And help our country to achieve sustainable energy future and to protect the planet earth now and for generation to come
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" >
                            <img src={Solar5Image} class="img-fluid" alt="" style={{ height: "320px" }} />
                        </div>
                    </div>
                </div>
            </section>
            <section class="why-us">
                <div class="container" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                            <img src={ValueImage} class="img-fluid" alt="" style={{ height: "300px" }} />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100" style={{ padding: "2%" }}>
                            <br />
                            <h3>Our Values </h3>
                            <br />
                            <p class="fst-italic">
                                <ul>
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Innovation</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Customer Satisfaction and Deliver Exceptional Service</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Energizing a Sustainable World</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Operate With Excellence</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Services</h2>
                        <p>We are dedicated to providing top-quality services to our clients, and we strive to meet and exceed their expectations. Our services are designed to meet a wide range of needs, and we are committed to providing excellent customer service and support throughout every step of the process.</p>
                    </div>

                    <div class="row">
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Solar Grid-Tied and Off-Grid Projects</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-file"></i></div>
                                <h4><a href="#">Solar Water Heater Systems &nbsp;&nbsp;</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-tachometer"></i></div>
                                <h4><a href="#">Solar Street Lights &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-layer"></i></div>
                                <h4><a href="#">Solar System AMC Services &nbsp;&nbsp;</a></h4>
                                <p></p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section id="cta" class="cta">
                <div class="container" data-aos="zoom-in">

                    <div class="row">
                        <div class="col-lg-9 text-center text-lg-start">
                            <h3>Call To Action</h3>
                            <br />
                            <p>Are you ready to make a positive impact on the environment and reduce your energy costs? Contact us today to learn how we can help you transition to renewable energy. Our team of experts is dedicated to providing top-quality services that are tailored to your unique needs.</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                            <Link
                                activeClass=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="cta-btn align-middle"
                            >
                                Call To Action
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <section id="team" class="team section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Team</h2>
                        <p>We have an expert team of experienced and dynamic personnel with a young and talented leader <strong>Mr. Harshal Kondhare</strong> who has pursued his master’s degree in Renewable Energy, London, UK with an Industrial experience of 2 years in the same field.</p>
                    </div>

                    <div class="row" style={{ textAlign: "center" }}>
                        <ul>
                            <li>  Director</li>
                            <li>  Admin staff (2 Accountants and 1 HR)</li>
                            <li>  Field staff - (2 site engineers, 1 site supervisor, 2 skilled electricians and 6 unskilled workers.</li>
                        </ul>
                    </div>

                </div>
            </section>
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Thank you for your interest in our services. Please send an email to us with your contact information and a brief message about your inquiry. We will get back to you as soon as possible. Thank you!</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">
                                <div class="address">
                                    <GeoAltFill size={35}/>
                                    <h4>Location:</h4>
                                    <p>Glaring Evolution Technologies Office no 26, Royal Chambers, Opp Suzuki Showroom, Paud Road, Pune - 411038</p>
                                </div>

                                <div class="email">
                                    <EnvelopeAtFill size={35} />
                                    <h4>Email:</h4>
                                    <p>info@glaringevolution.com</p>
                                </div>

                                <div class="phone">
                                    <PhoneFill  size={35}  />
                                    <h4>Call:</h4>
                                    <p>+91 7030991164</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4517427127066!2d73.82058421539827!3d18.508477187415956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6ed88b811b%3A0x8041aaadfd7952e7!2sGlaring%20Evolution%20Technologies!5e0!3m2!1sen!2sin!4v1677420872331!5m2!1sen!2sin"
                                frameborder="0"
                                height="600"
                                width="800"
                                allowfullscreen>
                            </iframe>
                        </div>

                    </div>

                </div>
            </section>

        </main>

    )
}

export default Main