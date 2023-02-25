function Header() {
  	return (
        <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">
    
          <h1 class="logo me-auto"><a href="#home">Glaring Evolution</a></h1>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#team">Team</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>

  	);
}

export default Header;
