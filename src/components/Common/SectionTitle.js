import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className=" justify-content-center">
          <Col lg={6}>
            <div className="text-center">
              <h4 className="title-heading text-uppercase">
                {this.props.title}
              </h4>
              <p className="title-desc text-muted">{this.props.description}</p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
