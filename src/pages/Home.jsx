import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import profileImg from '../assets/Marco.png';
import ExperienceBlock from '../Components/ExperienceBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <Container className="py-5">
      <Row className="gx-4 gy-5">
        {/* Left Sidebar */}
        <Col xs={12} md={4}>
          <Card className="p-4 shadow-sm">
            <div className="text-center">
              <img
                src={profileImg}
                alt="Marco"
                className="rounded-circle img-fluid mb-3"
                style={{ width: '160px', height: '160px', objectFit: 'cover' }}
              />
              <h4>Jiawei(Marco) Guo</h4>
              <p className="text-muted">
                CS & INFO @ UW
              </p>
              <p>
                <a href="mailto:jguo27@cs.washington.edu">jguo27@cs.washington.edu</a>
              </p>
              {/* Social Icons Row */}
              <div className="d-flex justify-content-center gap-3 flex-wrap mt-3 mb-3">
                <a href="mailto:jguo27@cs.washington.edu">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
                <a href="https://github.com/Marc0Guo" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/guojiawei-1161612b6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-center gap-2 flex-wrap">

                <Button variant="outline-secondary" size="sm">
                  Resume
                </Button>
              </div>
            </div>
          </Card>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={8}>
  <Card className="p-4 shadow-sm mb-4">
    <Card.Body>
      <Card.Title as="h2" className="mb-3">Hello! 👋</Card.Title>
      <Card.Text className="lead">
        I'm a <strong className="text-primary">Software Engineer</strong>,{' '}
        <strong className="text-success">Data Scientist</strong>, and{' '}
        <strong className="text-warning">Student</strong> passionate about designing thoughtful, real-world solutions through technology.
      </Card.Text>
      <Card.Text>
        I’m currently a second-year student at the University of Washington studying Computer Science 💻 and Informatics 📊.
        I love building meaningful tools and exploring the intersection of code, design, and impact.
      </Card.Text>
    </Card.Body>
  </Card>




<Card className="p-4 shadow-sm mb-4">
  <Card.Body>
    <Card.Title className="text mb-4">🎓 Teaching Experience</Card.Title>
                          <hr className="my-4" />

    <ExperienceBlock
      company="INFO 201 – Foundational Skills for Data Science"
      role="Teaching Assistant"
      date="April 2025 – Ongoing"
    />

    <hr className="my-4" />

    <ExperienceBlock
      company="INFO 370 – Core Methods in Data Science"
      role="Teaching Assistant"
      date="Jan 2025 – March 2025"
      description={`Led lab sections and held weekly office hours to support student learning.\nHeld a 2-hour lecture on conditional probability and Bayes' Theorem.\nRefined an automated Python script converting LaTeX content into R Markdown templates.`}
    />

    <hr className="my-4" />

    <ExperienceBlock
      company="INFO 180 – Introduction to Data Science"
      role="Teaching Assistant"
      date="Sept 2024 – Dec 2024"
      description={`Held a 1-hour lecture on data visualization using ggplot2 in R.\nPrepared and delivered teaching materials.`}
    />
  </Card.Body>
</Card>

        </Col>
      </Row>
    </Container>
  );
}

export default Home;
