import "./Navbar.css"
function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <a href="./images/Logo.png">WebCure</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/clients">Clientele</a></li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </nav>
    );
  }
  
  export default Navbar;