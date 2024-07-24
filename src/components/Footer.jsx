
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Dayel Przybyla. All rights reserved.</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/ddprzy37"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dayel-przybyla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

