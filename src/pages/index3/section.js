import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* HOME START */}
        <section className="section bg-home" id="home">
          <div className="bg-overlay" />
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row>
                  <Col lg={12} className="text-center">
                    <div className="mb-4">
                      <i className="mdi mdi-crown text-white-50 h1" />
                    </div>
                    <h5 className="home-small-title text-uppercase text-white-50 mb-4">
                      Awesome Design
                    </h5>
                    <h2 className="home-title text-white">
                      30 years of successful business consulting
                    </h2>
                    <p className="home-desc mx-auto mt-3 text-white-50">
                      Maecenas class semper class semper sollicitudin lectus
                      lorem iaculis imperdiet aliquam vehicula tempor auctor
                      curabitur pede aenean ornare.
                    </p>
                    <div className="text-center subcribe-form mt-5">
                      <form action="#">
                        <input type="email" required placeholder="E-mail" />
                        <button type="submit" className="btn btn-custom">
                          Subcribe
                        </button>
                      </form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>

        {/* HOME  END  */}
      </React.Fragment>
    );
  }
}

export default Section;
