import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

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
        <section className="section bg-home" id="home">
          <div className="bg-overlay" />
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="vertical-content">
                  <Col lg={8} className="mt-3">
                    <h5 className="home-small-title text-uppercase text-white-50 mb-4">
                      Awesome Design
                    </h5>
                    <h2 className="home-title text-white mb-4">
                      30 years of successful business online consulting
                    </h2>
                    <p className="home-desc text-white-50">
                      Maecenas class semper class semper sollicitudin lectus
                      lorem iaculis imperdiet aliquam vehicula tempor auctor
                      curabitur pede aenean ornare.
                    </p>
                    <div className="pt-4">
                      <Link to="#" className="btn btn-custom mr-2">
                        Get Started
                      </Link>
                      <Link to="#" className="btn btn-custom-white">
                        View More <i className="mdi mdi-arrow-right ml-2" />
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} className="mt-3">
                    <div className="home-registration-form bg-white p-4">
                      <h5 className="form-title mb-4 text-center font-weight-bold">
                        Get 30 days FREE Trial
                      </h5>
                      <AvForm className="registration-form">
                        <label className="text-muted">First Name</label>
                        <AvField
                          type="text"
                          name="fname"
                          id="exampleInputName1"
                          className="form-control mb-4 registration-input-box"
                          errorMessage="Enter First Name"
                          validate={{ required: { value: true } }}
                        />
                        <label className="text-muted">Last Name</label>
                        <AvField
                          type="text"
                          id="exampleInputName2"
                          name="lname"
                          className="form-control mb-4 registration-input-box"
                          errorMessage="Enter Last Name"
                          validate={{ required: { value: true } }}
                        />
                        <label className="text-muted">Email</label>
                        <AvField
                          type="email"
                          id="exampleInputEmail1"
                          name="email"
                          className="form-control mb-4 registration-input-box"
                          errorMessage="Enter Valid Email Address"
                          validate={{
                            required: { value: true },
                            email: { value: true },
                          }}
                        />
                        <button className="btn btn-custom w-100">
                          Free Trial
                        </button>
                      </AvForm>
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
