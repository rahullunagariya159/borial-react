import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import { Animated } from "react-animated-css";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";

//Import Lightbox
import Lightbox from "react-image-lightbox";
import "../../../node_modules/react-image-lightbox/style.css";

//Import Images
import work1 from "../../assets/images/portfolio/work-1.jpg";
import work2 from "../../assets/images/portfolio/work-2.jpg";
import work3 from "../../assets/images/portfolio/work-3.jpg";
import work4 from "../../assets/images/portfolio/work-4.jpg";
import work5 from "../../assets/images/portfolio/work-5.jpg";
import work6 from "../../assets/images/portfolio/work-6.jpg";
import work7 from "../../assets/images/portfolio/work-7.jpg";
import work8 from "../../assets/images/portfolio/work-8.jpg";

//creating array of images for image portfolio
const images = [work1, work2, work3, work4, work5, work6, work7, work8];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: work1,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Profile",
        },
        {
          image: work2,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Business",
        },
        {
          image: work3,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Finance",
        },
        {
          image: work4,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Marketing",
        },
        {
          image: work5,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Profile",
        },
        {
          image: work6,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Profile",
        },
        {
          image: work7,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Finance",
        },
        {
          image: work8,
          title: "Project Name",
          subtitle: "Client : Donald Jerry",
          category: "Business",
        },
      ],
      displayCategory: "All",
      photoIndex: 0,
      isOpen: false,
    };
    this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }
  render() {
    return (
      <React.Fragment>
        {/* PORTFOLIO START */}
        <section className="section bg-white pb-0" id="portfolio">
          <div className="container">
            <SectionTitle
              title="Amazing Work"
              description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime"
            />

            {/* portfolio menu */}
            <Row className=" mt-4">
              <Col lg={12}>
                <div className="text-center">
                  <ul
                    className="col container-filter categories-filter list-unstyled mb-0"
                    id="filter"
                  >
                    <li>
                      <Link
                        to="#"
                        onClick={() => this.setCategory("All")}
                        className={
                          this.state.displayCategory === "All"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        All
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Profile")}
                        className={
                          this.state.displayCategory === "Profile"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Business")}
                        className={
                          this.state.displayCategory === "Business"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Finance")}
                        className={
                          this.state.displayCategory === "Finance"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        Finance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() => this.setCategory("Marketing")}
                        className={
                          this.state.displayCategory === "Marketing"
                            ? "categories active"
                            : "categories"
                        }
                      >
                        Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            {/* End portfolio  */}
          </div>
          {/* Gallary */}
          <Container fluid>
            <Row className="container-grid mt-5 projects-wrapper">
              {this.state.projects
                .filter(
                  ({ category }) =>
                    this.state.displayCategory === category ||
                    this.state.displayCategory === "All"
                )
                .map(({ title, image, subtitle }, key) => (
                  <div className="img-max-width" key={key}>
                    <div className="item-box">
                      <Link
                        className="cbox-gallary1 mfp-image"
                        to=""
                        title="Project Name"
                        onClick={(event) => {
                          event.preventDefault();
                          this.setState({ isOpen: true, photoIndex: key });
                        }}
                      >
                        <Animated
                          animationIn="zoomIn"
                          animationOut="zoomOut"
                          animationInDuration={500}
                          animationOutDuration={500}
                          isVisible={true}
                        >
                          <img
                            className="item-container profile business"
                            src={image}
                            alt={1}
                          />
                        </Animated>
                        <div className="item-mask">
                          <div className="item-caption">
                            <h5 className="text-light">{title}</h5>
                            <p className="text-light">{subtitle}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </Row>

            {/* lightbox for portfolio images */}
            {this.state.isOpen && (
              <Lightbox
                mainSrc={images[this.state.photoIndex]}
                nextSrc={images[(this.state.photoIndex + 1) % images.length]}
                prevSrc={
                  images[
                    (this.state.photoIndex + images.length - 1) % images.length
                  ]
                }
                imagePadding={100}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (this.state.photoIndex + images.length - 1) %
                      images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (this.state.photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>
        </section>

        {/* PORTFOLIO END */}
      </React.Fragment>
    );
  }
}

export default Portfolio;
