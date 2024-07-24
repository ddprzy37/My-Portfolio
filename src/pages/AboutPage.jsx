

const About = () => (
  <section id="about" className="about-section">
    <h2>About Me</h2>
    
    <div className="about-content">
      <img
        src="/assets/IMG_0883.jpg"
        alt="Dayel's Photo"
        className="profile-photo"
      />
      <div className="about-text">
        <p>Hi, I'm Dayel! I'm currently on an exhilarating journey as an aspiring web developer, diving deep into the world of coding at the University of Utah's intensive BootCamp. Throughout this program, I've been mastering a variety of technologies and frameworks that are shaping me into a well-rounded developer.</p>
        
        <h3>Here's what I've been up to:</h3>
        <ul className="tech-list">
          <li><strong>HTML & CSS:</strong> Building responsive and accessible web pages from scratch. I'm skilled in creating layouts with Flexbox and Grid, and I ensure cross-browser compatibility and mobile responsiveness in all my designs.</li>
          <li><strong>JavaScript:</strong> Writing clean, efficient code and building interactive web features. I've explored ES6+ features, asynchronous programming with Promises and async/await, and have built dynamic applications using vanilla JavaScript.</li>
          <li><strong>React:</strong> Developing single-page applications with React, leveraging its component-based architecture, state management with Hooks, and creating seamless user experiences with React Router for navigation.</li>
          <li><strong>Node.js & Express:</strong> Building server-side applications and RESTful APIs. I have experience in creating robust back-end systems, handling middleware, and working with databases.</li>
          <li><strong>MongoDB:</strong> Utilizing MongoDB for data storage, implementing CRUD operations, and managing data with Mongoose for seamless integration with my Node.js applications.</li>
          <li><strong>Version Control:</strong> Using Git and GitHub for version control and collaboration. I’m proficient in branching, merging, and managing repositories to streamline development workflows.</li>
          <li><strong>Testing:</strong> Writing and running unit tests using Jest to ensure the reliability and robustness of my applications.</li>
          <li><strong>Deployment:</strong> Deploying applications to platforms like Heroku, Netlify, and GitHub Pages to make projects accessible to users.</li>
        </ul>

        <p>With these skills, I’m eager to contribute to innovative projects and continue growing as a developer. My journey is just beginning, and I'm excited to see where it takes me!</p>

        <p>I hold a Bachelor of Science degree in Biology and Chemistry from the University of Utah, achieving a GPA of 3.6.</p>

        <p>In addition to my academic background, I have a strong interest in software engineering, particularly in web development. I'm proficient in programming languages like Python and have hands-on experience in building and managing websites. For instance, I've been running my own website, <a href="http://www.thepresentworkshop.com" target="_blank" rel="noopener noreferrer">www.thepresentworkshop.com</a>, since February 2022, where I serve as an Amazon affiliate. I leverage Meta and Google tools effectively for advertising purposes.</p>
      </div>
    </div>
  </section>
);

export default About;

