import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";

class Pricing extends Component {
  pricingPlan1 = {
    pricings: [
      {
        id: 1,
        title: "Reguler",
        price: "99",
        pointPrice: "10.",
        packageDuration: "Weekly Package",
        duration: "Per Month",
        currency: "$",
        features: {
          bandwith: "1GB",
          onlinespace: "500MB",
          support: "No",
          domain: "1",
          hiddenFees: "-",
        },
      },
    ],
  };

  pricingPlan2 = {
    pricings: [
      {
        id: 2,
        title: "Startup",
        price: "99",
        pointPrice: "30.",
        packageDuration: "Monthly Package",
        duration: "Per Month",
        currency: "$",
        features: {
          bandwith: "2GB",
          onlinespace: "1GB",
          support: "No",
          domain: "3",
          hiddenFees: "No",
        },
      },
    ],
  };

  pricingPlan3 = {
    pricings: [
      {
        id: 3,
        title: "Business",
        price: "99",
        pointPrice: "80.",
        packageDuration: "Yearly Package",
        duration: "Per Month",
        currency: "$",
        features: {
          bandwith: "4GB",
          onlinespace: "2GB",
          support: "No",
          domain: "Unlimited",
          hiddenFees: "No",
        },
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* PRICING START */}
        <section className="section bg-light" id="price">
          <Container>
            <SectionTitle
              title=" Our Pricing Plans"
              description=" Nam libero tempore, cum soluta nobis est eligendi optio
              cumque nihil impedit quo minus id quod maxime"
            />

            <Row className="mt-4">
              {this.pricingPlan1.pricings.map((pricingPlan1, key) => (
                <Col lg={4} key={key}>
                  <div className="price bg-white mt-4 p-5">
                    <div className="item text-center">
                      <div className="type pb-3">
                        <h4>{pricingPlan1.title}</h4>
                        <p className="text-muted">
                          {pricingPlan1.packageDuration}
                        </p>
                      </div>
                      <div className="value">
                        <h3>
                          {pricingPlan1.pointPrice}
                          <span>
                            {pricingPlan1.price}
                            {pricingPlan1.currency}
                          </span>
                        </h3>
                        <span className="per text-muted">
                          {pricingPlan1.duration}
                        </span>
                      </div>
                      <div className="feature">
                        <ul className="list-unstyled text-muted">
                          <li>Bandwidth: {pricingPlan1.features.bandwith}</li>
                          <li>
                            Onlinespace: {pricingPlan1.features.onlinespace}
                          </li>
                          <li>Support: {pricingPlan1.features.support}</li>
                          <li>Domain: {pricingPlan1.features.domain}</li>
                          <li>{pricingPlan1.features.hiddenFees}</li>
                        </ul>
                      </div>
                      <div>
                        <Link to="#" className="btn btn-custom">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}

              {this.pricingPlan2.pricings.map((pricingPlan2, key) => (
                <Col lg={4} key={key}>
                  <div className="price bg-custom mt-4 p-5">
                    <div className="item text-center active text-white">
                      <div className="type pb-3">
                        <h4>{pricingPlan2.title}</h4>
                        <p>{pricingPlan2.packageDuration}</p>
                      </div>
                      <div className="value">
                        <h3>
                          {pricingPlan2.pointPrice}
                          <span>
                            {pricingPlan2.price}
                            {pricingPlan2.currency}
                          </span>
                        </h3>
                        <span className="per text-white">
                          {pricingPlan2.duration}
                        </span>
                      </div>
                      <div className="feature">
                        <ul className="list-unstyled">
                          <li>Bandwidth: {pricingPlan2.features.bandwith}</li>
                          <li>
                            Onlinespace: {pricingPlan2.features.onlinespace}
                          </li>
                          <li>Support: {pricingPlan2.features.support}</li>
                          <li>Domain: {pricingPlan2.features.domain}</li>
                          <li>
                            Hidden Fees: {pricingPlan2.features.hiddenFees}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link to="#" className="btn btn-custom-white">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}

              {this.pricingPlan3.pricings.map((pricingPlan3, key) => (
                <Col lg={4} key={key}>
                  <div className="price bg-white mt-4 p-5">
                    <div className="item text-center">
                      <div className="type pb-3">
                        <h4>{pricingPlan3.title}</h4>
                        <p className="text-muted">
                          {pricingPlan3.packageDuration}
                        </p>
                      </div>
                      <div className="value">
                        <h3>
                          {pricingPlan3.pointPrice}
                          <span>
                            {pricingPlan3.price}
                            {pricingPlan3.currency}
                          </span>
                        </h3>
                        <span className="per text-muted">
                          {pricingPlan3.duration}
                        </span>
                      </div>
                      <div className="feature">
                        <ul className="list-unstyled text-muted">
                          <li>Bandwidth: {pricingPlan3.features.bandwith}</li>
                          <li>
                            Onlinespace: {pricingPlan3.features.onlinespace}
                          </li>
                          <li>Support: {pricingPlan3.features.support}</li>
                          <li>Domain: {pricingPlan3.features.domain}</li>
                          <li>
                            Hidden Fees: {pricingPlan3.features.hiddenFees}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link to="#" className="btn btn-custom">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* PRICING END  */}
      </React.Fragment>
    );
  }
}

export default Pricing;
