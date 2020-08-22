import React, { Component } from "react";
import { Col } from "reactstrap";
class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) => (
          <Col lg={6} key={key}>
            <div className="services-blog mt-4">
              <div>
                <img src={service.icon} className="img-fluid" alt="service" />
              </div>
              <div className="service-head">
                <h4 className="mb-2">{service.title}</h4>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ServiceBox;
