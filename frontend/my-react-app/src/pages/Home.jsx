import "./Home.css";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>LifeCare Hospital</h1>
        <ul>
          <li>Home</li>
          <li>Doctors</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
     
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Your Health, Our Priority</h2>
          <p>
            We provide world-class medical services with experienced doctors
            and modern facilities.
          </p>
          <button>Book Appointment</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Hospital"
          />
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-box">
          <div className="card">Emergency Care</div>
          <div className="card">Qualified Doctors</div>
          <div className="card">24/7 Support</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 LifeCare Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
