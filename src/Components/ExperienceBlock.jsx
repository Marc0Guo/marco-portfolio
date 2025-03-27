import { Row, Col } from 'react-bootstrap';

function ExperienceBlock({ company, role, date, description }) {
  return (
    <div className="mb-2">
      <Row className="justify-content-between">
        <Col xs={12} md={8}>
          <h6 className="mb-1 fw-bold">{company}</h6>
          <div className="fw-semibold">{role}</div>
        </Col>
        <Col
          xs={12}
          md="auto"
          className="text-md-end text-muted mt-2 mt-md-0"
          style={{ whiteSpace: 'nowrap' }}
        >
          {date}
        </Col>
      </Row>
      <p className="mt-2 mb-0" style={{ whiteSpace: 'pre-line' }}>
        {description}
      </p>
    </div>
  );
}

export default ExperienceBlock;
