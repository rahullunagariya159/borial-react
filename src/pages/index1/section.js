import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
// import ModalSection from "../../components/Common/ModalSection";

//Import Image
// import heroBgImg from "../../assets/images/hero-bg-1.jpg";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        {/* HOME START */}
        <section className="bg-home-half" id="home">
          <div className="bg-overlay" />
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row>
                  <Col lg={12}>
                    <div className="text-center text-white">
                      <h5 className="home-small-title text-uppercase text-white-50 mb-4">
                        Awesome Design
                      </h5>
                      <h2 className="home-title mb-4">
                        30 years of successful business consulting
                      </h2>
                      <p className="home-desc text-white-50 mx-auto">
                        Maecenas class semper class semper sollicitudin lectus
                        lorem iaculis imperdiet aliquam vehicula tempor auctor
                        curabitur pede aenean ornare.
                      </p>
                      <div className="text-center pt-4">
                        <Link to="#" className="btn btn-custom">
                          View More <i className="mdi mdi-arrow-right ml-2" />
                        </Link>
                      </div>
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
