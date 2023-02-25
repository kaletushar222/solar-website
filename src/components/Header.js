import Logo from '../assets/images/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

const toggleMobileNav = () => {
    if (
        navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) 
    {
        select('#navbar').classList.toggle('navbar-mobile')
    }
}

function Header() {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><Link href="#home"><img src={Logo} style={{marginTop: "-7px"}} alt="Logo" className="img-fluid"/> Glaring Evolution</Link></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                onClick={toggleMobileNav} 
                                className="nav-link scrollto " 
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                onClick={toggleMobileNav} 
                                className="nav-link scrollto" 
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="why-us"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="nav-link scrollto" 
                            >
                                Why us
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="nav-link scrollto" 
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="nav-link scrollto" 
                            >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="nav-link scrollto" 
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="nav-link scrollto" 
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                    <i onClick={ toggleMobileNav } className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>

    );
}

export default Header;
