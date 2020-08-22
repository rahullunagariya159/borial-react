import React, { Component } from "react";
import { Row, Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";

//Import Welcome box
import WelcomeBox from "./welcomeBox";

class Welcome extends Component {
  state = {
    contents: [
      {
        title: "Story & History",
        icon: "mdi-book-open-page-variant",
        description:
          "Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut imperdiet. It is a long established fact that a reader will be distracted.",
      },
      {
        title: "Goal & Mission",
        icon: "mdi-airballoon",
        description:
          "Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut imperdiet. It is a long established fact that a reader will be distracted.",
      },
      {
        title: "Target & Success",
        icon: "mdi-bullseye-arrow",
        description:
          "Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut imperdiet. It is a long established fact that a reader will be distracted.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {/* WELCOME START */}
        <section className="section" id="feature">
          <Container className="container">
            <SectionTitle
              title="Welcome to Borial"
              description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime"
            />

            <Row className="mt-4">
              <WelcomeBox contents={this.state.contents} />
            </Row>
          </Container>
        </section>
        {/* WELCOME END */}
      </React.Fragment>
    );
  }
}

export default Welcome;
