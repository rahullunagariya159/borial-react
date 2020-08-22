import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images

import macbook from "../../assets/images/home//macbook.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        {/* HOME START */}
        <section className="home-prestion" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8} className="text-center text-white">
                    <h4 className="mt-5 pt-5 home-title">
                      Here is the best way to present your products
                    </h4>
                    <div>
                      <img
                        src={macbook}
                        alt="img"
                        className="img-fluid center-block home-dashboard"
                      />
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
