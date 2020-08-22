import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

//Import Images
import homeBgSlider1 from "../../assets/images/home/home-bg.jpg";
import homeBgSlider2 from "../../assets/images/home/home-bg-2.jpg";
import homeBgSlider3 from "../../assets/images/home/home-bg-3.jpg";

const items = [
  {
    id: 1,
    title: "Awesome Design",
    subTitle: "We love make things amazing and simple",
    description:
      "Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.",
    img: homeBgSlider1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    id: 2,
    title: "Awesome Design",
    subTitle: "We love make things amazing and simple",
    description:
      "Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.",
    img: homeBgSlider2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    id: 3,
    title: "Awesome Design",
    subTitle: "We love make things amazing and simple",
    description:
      "Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet aliquam vehicula tempor auctor curabitur pede aenean ornare.",
    img: homeBgSlider3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

function Section(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const Slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className="bg-overlay" />
        <div
          className="home-center"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="home-desc-center">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="text-center text-white">
                    <h5 className="home-small-title text-uppercase text-white-50 mb-4">
                      {item.title}
                    </h5>
                    <h2 className="home-title mb-4">{item.subTitle}</h2>
                    <p className="home-desc text-white-50 mx-auto">
                      {item.description}
                    </p>
                    <div className="text-center pt-4">
                      <Link to="/" className="btn btn-custom mr-2">
                        Contact Us
                      </Link>
                      <Link to="/" className="btn btn-custom-white">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      {/* HOME START */}
      <section className="home-slider" id="home">
        <Container fluid>
          <Row>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              {Slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Row>
        </Container>
      </section>

      {/* HOME  END  */}
    </React.Fragment>
  );
}

export default Section;
