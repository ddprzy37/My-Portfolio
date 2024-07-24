
import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div id="resume-page" className="container mt-5">
      <h1>Resume</h1>
      <p>
        <a
          href="/path/to/your/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View My Resume
        </a>
      </p>
      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
};

export default ResumePage;
