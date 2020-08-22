import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Common/SectionTitle";

//Slider
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Client images
import client1 from "../../assets/images/client/11.jpg";
import client2 from "../../assets/images/client/12.jpg";
import client3 from "../../assets/images/client/13.jpg";

class Clients extends Component {
  state = {
    clients: [
      {
        id: 1,
        img: client1,
        name: "Willimore Wilson",
        designation: "Founder",
        description:
          " Their separate existence is a myth. For science music sport etc Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language ",
      },
      {
        id: 2,
        img: client2,
        name: "Charley Brown",
        designation: "CEO",
        description:
          " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a normal of letters, as opposed to using making it look like readable English.",
      },
      {
        id: 3,
        img: client3,
        name: "Norden Sophie",
        designation: "Manager",
        description:
          " The new common language will be more simple and regular than the existing languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge ",
      },
    ],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      960: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };
  render() {
    return (
      <React.Fragment>
        {/* <!-- TESTIMONIAL START --> */}

        <section className="section" id="client">
          <Container>
            <SectionTitle
              title="Our Testimonial"
              description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime"
            />

            <Row className="justify-content-center mt-4">
              <Col lg={8}>
                <OwlCarousel
                  className="owl-theme"
                  items={1}
                  loop={true}
                  margin={10}
                  nav={false}
                  dots={true}
                  autoplay={true}
                  responsive={this.state.responsive}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                >
                  {this.state.clients.map((clients, key) => (
                    <div className="testi-box" key={key}>
                      <div className="text-center mt-4">
                        <div className="testi-content">
                          <p className="user-review text-center mb-0">
                            {clients.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <img
                            src={clients.img}
                            alt="clientImage"
                            className="img-fluid rounded-circle testi-user mx-auto d-block"
                          />
                        </div>
                        <div className="img-post text-center">
                          <p className="testi-patients text-muted mb-1 mt-3">
                            {clients.designation}
                          </p>
                          <h5 className="testi-client-name">{clients.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* owl item end */}
                </OwlCarousel>
              </Col>
            </Row>
          </Container>
        </section>
        {/* TESTIMONIAL END */}
      </React.Fragment>
    );
  }
}

export default Clients;
