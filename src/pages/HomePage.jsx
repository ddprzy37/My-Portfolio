

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm a web developer with a passion for creating beautiful and functional web applications.
        </p>
      </header>
      
      <section className="services">
        <h2>Services</h2>
        <div className="service-item">
          <h3>Web Development</h3>
          <p>
            I specialize in building responsive and user-friendly websites using the latest technologies.
          </p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>
            I design intuitive user interfaces and create engaging user experiences.
          </p>
        </div>
        <div className="service-item">
          <h3>Consulting</h3>
          <p>
            I offer consulting services to help you improve your digital presence and achieve your business goals.
          </p>
        </div>
      </section>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          I have a background in computer science and years of experience in web development. I am passionate about learning new technologies and improving my skills.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
