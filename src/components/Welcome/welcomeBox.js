import React, { Component } from "react";
import { Col } from "reactstrap";
class WelcomeBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.contents.map((content, key) => (
          <Col lg={4} key={key}>
            <div className="features mt-4">
              <div className="text-center">
                <div className="mb-4">
                  <h5 className="text-custom">
                    <i className={`mdi ${content.icon}`} />
                  </h5>
                </div>
                <h4>{content.title}</h4>
                <p className="features-desc text-muted mt-3 pl-2 pr-2">
                  {content.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default WelcomeBox;
