import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Image
import logo1 from "../../assets/images/home/1.png";
import logo2 from "../../assets/images/home/2.png";
import logo3 from "../../assets/images/home/3.png";
import logo4 from "../../assets/images/home/4.png";
import logo5 from "../../assets/images/home/5.png";
import logo6 from "../../assets/images/home/6.png";

class Section extends Component {
  state = {
    clients: [
      {
        id: 1,
        name: "logo1",
        logo: logo1,
      },
      {
        id: 2,
        name: "logo2",
        logo: logo2,
      },
      {
        id: 3,
        name: "logo3",
        logo: logo3,
      },
      {
        id: 4,
        name: "logo4",
        logo: logo4,
      },
      {
        id: 5,
        name: "logo5",
        logo: logo5,
      },
      {
        id: 6,
        name: "logo6",
        logo: logo6,
      },
    ],
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
                <Row className="mt-5 mb-5">
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
                <Row>
                  {this.state.clients.map((client, key) => (
                    <Col lg={2} key={key}>
                      <div className="clients-img">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="mx-auto img-fluid d-block"
                        />
                      </div>
                    </Col>
                  ))}
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
