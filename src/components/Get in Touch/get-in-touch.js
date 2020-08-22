import React, { Component } from "react";
import { Container, Row, Col, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      subject: "",
      comments: "",
      msgSendSuccess: false,
      emailAdress: "Example@abc.com",
      phoneNumber: "+1-202-555-0134 , +1-202-555-0194",
      homeAddress: "4317 Straford Park, Campton, KY",
    };
  }

  handleSubmit = () => {
    let emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

    if (
      this.state.firstname !== "" &&
      this.state.email !== "" &&
      emailPattern.test(this.state.email) &&
      this.state.subject !== "" &&
      this.state.comments !== ""
    ) {
      this.setState({ msgSendSuccess: true });
      this.myFormRef.reset();

      setTimeout(() => {
        this.setState({ firstname: "" });
        this.setState({ email: "" });
        this.setState({ subject: "" });
        this.setState({ comments: "" });
        this.setState({ msgSendSuccess: false });
      }, 5000);
    }
  };

  onInputChangeHandlar = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        {/* CONTACT START */}
        <section className="section" id="contact">
          <Container>
            <SectionTitle
              title="Get In Touch"
              description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime"
            />
            <Row className="mt-4 vertical-content">
              <Col lg={12}>
                <Row className=" mt-5">
                  <Col lg={4}>
                    <div className="contact-info">
                      <div className="mt-3">
                        <div className="float-left">
                          <i className="mdi mdi-email h5" />
                        </div>
                        <div className="ml-5">
                          <h6 className="text-custom">Email Address</h6>
                          <p>{this.state.emailAdress}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="float-left">
                          <i className="mdi mdi-phone-in-talk h5" />
                        </div>
                        <div className="ml-5">
                          <h6 className="text-custom">Phone number</h6>
                          <p>{this.state.phoneNumber}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="float-left">
                          <i className="mdi mdi-home h5" />
                        </div>
                        <div className="ml-5">
                          <h6 className="text-custom">Home Address</h6>
                          <p>{this.state.homeAddress}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="custom-form">
                      <div id="message" />
                      <AvForm
                        method="post"
                        action="../../php/contact.php"
                        name="contact-form"
                        id="contact-form"
                      >
                        <Row>
                          <Col lg={6}>
                            <FormGroup>
                              <AvField
                                name="name"
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Your name..."
                                errorMessage="Enter Name"
                                validate={{ required: { value: true } }}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg={6}>
                            <FormGroup>
                              <AvField
                                name="email"
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Your email..."
                                errorMessage="Enter Valid Email Address"
                                validate={{
                                  required: { value: true },
                                  email: { value: true },
                                }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <FormGroup>
                              <AvField
                                name="text"
                                id="sub"
                                type="text"
                                className="form-control"
                                placeholder="Your subject..."
                                errorMessage="Enter Subject"
                                validate={{ required: { value: true } }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <FormGroup>
                              <AvField
                                type="textarea"
                                name="comments"
                                id="comments"
                                rows={4}
                                className="form-control"
                                placeholder="Your message..."
                                errorMessage="Enter your message."
                                validate={{ required: { value: true } }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row className=" mt-3">
                          <Col lg={12}>
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-custom"
                              value="Send Message"
                            />
                            <div id="simple-msg" />
                          </Col>
                        </Row>
                      </AvForm>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        {/* CONTACT END */}
      </React.Fragment>
    );
  }
}

export default GetInTouch;
