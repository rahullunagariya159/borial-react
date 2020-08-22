import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class GetStarted extends Component {
  render() {
    return (
      <React.Fragment>
        {/* START CTA */}
        <section className="section bg-custom">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <h3 className="text-white text-center">
                  Become a part of Borial bussiness community today
                </h3>
                <p className="cta-desc text-white text-center mt-3">
                  Molestias excepturi sint occaecati cupiditate non provident
                </p>
                <div className="text-center mt-4">
                  <Link to="#" className="btn btn-custom-white">
                    Get Started
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* END CTA */}
      </React.Fragment>
    );
  }
}

export default GetStarted;
