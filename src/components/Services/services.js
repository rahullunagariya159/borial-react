import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";

import ServiceBox from "./service-box";

//Import images
import Briefcase from "../../assets/images/services/Briefcase.png";
import Envelope from "../../assets/images/services/Envelope.png";
import DrawingTablet from "../../assets/images/services/DrawingTablet.png";
import Rulers from "../../assets/images/services/Rulers.png";
import { Link } from "react-router-dom";

class Services extends Component {
  state = {
    services: [
      {
        title: "Contant Marketing",
        icon: Briefcase,
        description:
          "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc.",
        link: "#",
      },
      {
        title: "Email marketing",
        icon: Envelope,
        description:
          "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental",
        link: "#",
      },
    ],
    services1: [
      {
        title: "Market Analysis",
        icon: DrawingTablet,
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit sed quia non numquam modi eius.",
        link: "#",
      },
      {
        title: "Keyword Research",
        icon: Rulers,
        description:
          "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary their pronunciation.",
        link: "#",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {/* SERVICE START  */}
        <section className="section bg-light" id="service">
          <Container className="container">
            <SectionTitle
              title="Our Services "
              description="Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime"
            />

            <Row className=" mt-4">
              <ServiceBox services={this.state.services} />
            </Row>

            <Row className=" mt-2">
              <ServiceBox services={this.state.services1} />
            </Row>

            <Row className=" mt-4">
              <Col lg={12}>
                <div className="text-center mt-5">
                  <Link to="#" className="btn btn-custom btn-round">
                    See all Services
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* SERVICE END  */}
      </React.Fragment>
    );
  }
}

export default Services;
