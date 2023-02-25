import { CheckCircle, BookmarkStarFill, Check } from 'react-bootstrap-icons';
import ValueImage from '../assets/images/value.jpg'
import Solar3Image from '../assets/images/solar3.jpg'

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
                            <p>
                                Our goal is to become the leading consulting firm Renewable Energy Sector by giving our client timely superior quality service and help them earn thee due profit. And help our country to achieve sustainable energy future and to protect the planet earth now and for generation to come
                            </p>
                        </div>
                        <br/><br/><br/><br/>
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
            <section  class="why-us">
                <div class="container" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                            <img src={ValueImage} class="img-fluid" alt="" style={{ height: "300px" }} />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100" style={{padding: "2%"}}>
                            <br />
                            <h3>Our Values </h3>
                            <br />
                            <p class="fst-italic">
                                <ul>
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Innovation</li>
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Customer Satisfaction and Deliver Exceptional Service</li>
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Energizing a Sustainable World</li>
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
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                <h4><a href="">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-file"></i></div>
                                <h4><a href="">Sed ut perspici</a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-tachometer"></i></div>
                                <h4><a href="">Magni Dolores</a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-layer"></i></div>
                                <h4><a href="">Nemo Enim</a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
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
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                            <a class="cta-btn align-middle" href="#">Call To Action</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="team" class="team section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section id="pricing" class="pricing">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Pricing</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="box">
                                <h3>Free Plan</h3>
                                <h4><sup>$</sup>0<span>per month</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li class="na"><i class="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li class="na"><i class="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <a href="#" class="buy-btn">Get Started</a>
                            </div>
                        </div>

                        <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div class="box featured">
                                <h3>Business Plan</h3>
                                <h4><sup>$</sup>29<span>per month</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" class="buy-btn">Get Started</a>
                            </div>
                        </div>

                        <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div class="box">
                                <h3>Developer Plan</h3>
                                <h4><sup>$</sup>49<span>per month</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" class="buy-btn">Get Started</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section id="faq" class="faq section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="faq-list">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100">
                                <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">Feugiat scelerisque varius morbi enim nunc? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="300">
                                <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="400">
                                <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="500">
                                <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" class="form-control" id="name" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" class="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" class="form-control" name="subject" id="subject" required />
                                </div>
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea class="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

        </main>

    )
}

export default Main