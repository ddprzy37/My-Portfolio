


const Portfolio = () => (
  <section id="portfolio">
    <h2>My Projects</h2>
    <div className="projects-container">
      {/* Project Item 1 */}
      <div className="project-item">
        <a href="https://ddprzy37.github.io/Dayel-s-blog/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/Blog.png" alt="My Blog" className="project-image" />
          <div className="overlay">
            <div className="overlay-text">My Blog</div>
          </div>
        </a>
        <div className="project-links">
          <a href="https://github.com/ddprzy37/SEO-for-local-business" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/src/assets/github_logo.png" alt="GitHub Repository" className="github-icon" />
            View the repo
          </a>
        </div>
      </div>
      
      {/* Project Item 2 */}
      <div className="project-item">
        <a href="https://ddprzy37.github.io/Dynamic-Weather-Forecaster/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/Weather.png" alt="Weather App" className="project-image" />
          <div className="overlay">
            <div className="overlay-text">My Weather App</div>
          </div>
        </a>
        <div className="project-links">
          <a href="https://github.com/ddprzy37/Dynamic-Weather-Forecaster" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/src/assets/github_logo.png" alt="GitHub Repository" className="github-icon" />
            View the repo
          </a>
        </div>
      </div>

      {/* Project Item 3 */}
      <div className="project-item">
        <a href="https://express-notes-k5t7.onrender.com/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/Notes.png" alt="Notetaker App" className="project-image" />
          <div className="overlay">
            <div className="overlay-text">My Notetaker App</div>
          </div>
        </a>
        <div className="project-links">
          <a href="https://github.com/ddprzy37/Notetaker-App" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/src/assets/github_logo.png" alt="GitHub Repository" className="github-icon" />
            View the repo
          </a>
        </div>
      </div>

      {/* Project Item 4 */}
      <div className="project-item">
        <a href="https://ddprzy37.github.io/Task-manager/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/Tasks.png" alt="Task Manager App" className="project-image" />
          <div className="overlay">
            <div className="overlay-text">My Task Manager App</div>
          </div>
        </a>
        <div className="project-links">
          <a href="https://github.com/ddprzy37/Task-manager" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/src/assets/github_logo.png" alt="GitHub Repository" className="github-icon" />
            View the repo
          </a>
        </div>
      </div>

      {/* Project Item 5 */}
      <div className="project-item">
        <a href="https://ddprzy37.github.io/Payroll-manager/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/Payroll.png" alt="Payroll Manager App" className="project-image" />
          <div className="overlay">
            <div className="overlay-text">My Payroll Manager App</div>
          </div>
        </a>
        <div className="project-links">
          <a href="https://github.com/ddprzy37/Payroll-manager" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/src/assets/github_logo.png" alt="GitHub Repository" className="github-icon" />
            View the repo
          </a>
        </div>
      </div>

      {/* Project Item 6 */}
      <div className="project-item">
        <a href="https://grawrb.github.io/EZChefsApp/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/EZChefs.png" alt="EZChefs App" className="project-image" />
          <div className="overlay">
            <div className="overlay-text">My EZChefs App</div>
          </div>
        </a>
        <div className="project-links">
          <a href="https://github.com/grawrb/EZChefsApp" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/src/assets/github_logo.png" alt="GitHub Repository" className="github-icon" />
            View the repo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
