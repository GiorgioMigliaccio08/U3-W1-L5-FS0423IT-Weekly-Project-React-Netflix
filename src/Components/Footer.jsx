import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-dark text-secondary mt-5">
          <Container className="py-4">
            <Row>
              <Col lg={12} sm={12}>
                <Row>
                  <Row md={4} sm={4} className="text center">
                    <p>Audio and Subtitles</p>
                    <p>Media Center</p>
                    <p> Privacy</p>
                    <p> Contact Us</p>
                    <p>Service Code</p>
                    <p> Audio Description</p>
                    <p> Legal Noticies</p>
                    <p> Investor Relations</p>
                    <p> Help Center</p>
                    <p> Legal Noticies</p>
                    <p> Jobs </p>
                    <p> Cookie Preferencess</p>
                  </Row>
                </Row>
                <hr className="bg-secondary my-4" />
                <Row>
                  <Col>
                    <p>Netflix, Inc. &#169; 2023</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
