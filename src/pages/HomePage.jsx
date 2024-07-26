const technologies = [
  { badgeUrl: 'https://img.shields.io/badge/HTML-5.0-blue.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { badgeUrl: 'https://img.shields.io/badge/CSS-3.0-blue.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { badgeUrl: 'https://img.shields.io/badge/JavaScript-ES6-yellow.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { badgeUrl: 'https://img.shields.io/badge/React-17.0-blue.svg', url: 'https://reactjs.org/' },
  { badgeUrl: 'https://img.shields.io/badge/Node.js-14.x-green.svg', url: 'https://nodejs.org/' },
  { badgeUrl: 'https://img.shields.io/badge/MongoDB-4.4-green.svg', url: 'https://www.mongodb.com/' },
  { badgeUrl: 'https://img.shields.io/badge/Express-4.x-blue.svg', url: 'https://expressjs.com/' },
  { badgeUrl: 'https://img.shields.io/badge/Bootstrap-5.0-purple.svg', url: 'https://getbootstrap.com/' },
  { badgeUrl: 'https://img.shields.io/badge/jQuery-3.6.0-blue.svg', url: 'https://jquery.com/' },
  { badgeUrl: 'https://img.shields.io/badge/MySQL-8.0-blue.svg', url: 'https://www.mysql.com/' },
  { badgeUrl: 'https://img.shields.io/badge/Handlebars-4.x-blue.svg', url: 'https://handlebarsjs.com/' },
  { badgeUrl: 'https://img.shields.io/badge/Sequelize-6.x-blue.svg', url: 'https://sequelize.org/' },
  { badgeUrl: 'https://img.shields.io/badge/REST%20APIs-Available-blue.svg', url: 'https://restfulapi.net/' },
  { badgeUrl: 'https://img.shields.io/badge/GraphQL-15.x-blue.svg', url: 'https://graphql.org/' },
  { badgeUrl: 'https://img.shields.io/badge/Git-2.30-blue.svg', url: 'https://git-scm.com/' },
  { badgeUrl: 'https://img.shields.io/badge/NoSQL-Available-yellow.svg', url: 'https://en.wikipedia.org/wiki/NoSQL' },
  { badgeUrl: 'https://img.shields.io/badge/npm-7.0-red.svg', url: 'https://www.npmjs.com/' },
];


function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I&apos;m Dayel Przybyla. I am a Full Stack Web Developer. I love coding and working on cool projects.
        </p>
      </header>

      <section className="services">
        <h2>Services:</h2>
        <div className="service-item">
          <h5>Web Development</h5>
          <p>
            I specialize in building responsive and user-friendly websites using the latest technologies.
          </p>
        </div>
        <div className="service-item">
          <h5>UI/UX Design</h5>
          <p>
            I design intuitive user interfaces and create engaging user experiences.
          </p>
        </div>
        <div className="service-item">
          <h5>Consulting</h5>
          <p>
            I offer consulting services to help you improve your digital presence and achieve your business goals.
          </p>
        </div>
      </section>

      <section className="technologies">
        <h2>My Skillset</h2>
        <div className="tech-badges">
          {technologies.map((tech, index) => (
            <a key={index} href={tech.url} target="_blank" rel="noopener noreferrer" className="tech-badge">
              <img src={tech.badgeUrl} alt={tech.name} />
              <span>{tech.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
export default HomePage;
