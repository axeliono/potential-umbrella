import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer bg="dark" variant="dark">
      <Container>
        <Row>
          <Col className="py-3">Copyright &copy; FitSpott</Col>
          <Col>
            <a
              target="_blank"
              href="http://github.com/axeliono"
              rel="noreferrer"
            >
              Chandler Green
              <i class="fab fa-github"></i>
            </a>
          </Col>
          <Col>
            <a
              target="_blank"
              href="https://github.com/ParijatSingh"
              rel="noreferrer"
            >
              Parijat Singh
              <i class="fab fa-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
