import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div id="resume-page" className="container mt-5">
      <h1>Resume</h1>

      <section id="education">
        <h2>Education</h2>
        <p><strong>The University of Utah</strong></p>
        <ul>
          <li>Bachelor of Science in Biology</li>
          <li>Bachelor of Science in Chemistry</li>
        </ul>
        <p>GPA: 3.6</p>
      </section>

      <section id="software-engineering">
  <h2>Software Engineering</h2>
  
  <p><strong>Proficient Programming Languages:</strong></p>
  <div className="technologiess">
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript (ES6)</li>
      <li>React</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <li>Express</li>
      <li>Bootstrap</li>
      <li>jQuery</li>
      <li>MySQL</li>
      <li>Handlebars</li>
      <li>Sequelize</li>
      <li>REST APIs</li>
      <li>GraphQL</li>
      <li>Git</li>
      <li>NoSQL</li>
      <li>npm</li>
    </ul>
  </div>
  
  <p className = "web"><strong>Web Development:</strong></p>
  <div >
  <ul>
    <li>Built and run my website called <a href="http://www.thepresentworkshop.com" target="_blank" rel="noopener noreferrer">www.thepresentworkshop.com</a> where I have been an Amazon affiliate since February 2022.</li>
    <li>Proficient in using Meta and Google tools for advertising.</li>
    <li>Developed various web applications during my recent course, demonstrating strong skills in full-stack development, including creating interactive UIs with React and handling backend services with Node.js and Express.</li>
    <li>Experienced in building and deploying applications using Vite for optimized development and build processes.</li>
    <li>Implemented responsive design and optimized performance for various projects, including a personal portfolio showcasing a range of projects and skills.</li>
  </ul>
  </div>
</section>


      <section id="awards">
        <h2>Awards</h2>
        <ul>
          <li><strong>Resiliency Award from the Chemistry Department of the University of Utah</strong> - Fall 2020</li>
        </ul>
        <p>Given to chemistry students who have demonstrated the ability to adapt well in the face of adversity.</p>
      </section>

      <section id="research">
        <h2>Research</h2>
        <ul>
          <li><strong>Biochemistry of Dr. Cynthia Burrows</strong> - May 2018 - March 2020
            <ul>
              <li>Tested binding affinity to certain therapeutics with g-quadruplex structures in DNA.</li>
              <li>Synthesized concentrations of solutes for experiments and tested different percentages of compounds in the DNA using CD.</li>
              <li>Exposed plasmid DNA to UV light, annealed damaged DNA, and analyzed fragments for streaking patterns on an electrophoresis gel.</li>
            </ul>
          </li>

          <li><strong>Emergency Department at the University of Utah</strong> - January - May 2020
            <ul>
              <li>Studied patients based on their reason for visiting, e.g. chest pain, musculoskeletal pain, etc.</li>
              <li>Included a cross-study questionnaire on the patient's health literacy.</li>
            </ul>
          </li>

          <li><strong>Genetics Lab of Professor Richard Clark</strong> - June - December 2017
            <ul>
              <li>Studied spider mites looking for gene mutations in their carotene.</li>
              <li>Exercised precision with microscopy.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="volunteer">
        <h2>Volunteer</h2>
        <ul>
          <li><strong>Maliheh Clinic</strong> - June 2017 - May 2020
            <ul>
              <li>Worked as a translator for native Portuguese speakers so they could communicate with their healthcare providers.</li>
            </ul>
          </li>

          <li><strong>Read for Kids</strong> - January - May 2020
            <ul>
              <li>Read with children struggling with their reading comprehension using Dyad reading to elevate their reading skills.</li>
            </ul>
          </li>

          <li><strong>Portuguese-Speaking Volunteer</strong> - November 2014 - November 2016
            <ul>
              <li>Led groups of 10-12 other volunteers conducting weekly training meetings, followed up on goals, and created weekly progress reports.</li>
              <li>Oversaw the financial operations of 150-200 volunteers.</li>
              <li>Taught English as a second language weekly.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="work-experience">
        <h2>Work Experience</h2>
        <ul>
          <li><strong>Hospitality</strong>
            <ul>
              <li>Cheesecake Factory - October 2022 - Present</li>
              <li>Salt Lake Brewing Co. - May - October 2022</li>
            </ul>
          </li>

          <li><strong>Sales</strong>
            <ul>
              <li>Podium - August 2021 - May 2022</li>
              <li>Haws Services - April 2019 - August 2021</li>
            </ul>
          </li>

          <li><strong>Health Care</strong>
            <ul>
              <li>The University of Utah - March 2017 - April 2019</li>
            </ul>
          </li>
        </ul>
      </section>

      <p>
        <a
          href="/assets/RESUME (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View My Resume
        </a>
      </p>

      <p>
        <a
          href="/assets/RESUME (2).pdf"
          download="My_Resume.pdf"
          className="btn btn-success"
        >
          Download My Resume
        </a>
      </p>

      <div className="mt-3">
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ResumePage;




