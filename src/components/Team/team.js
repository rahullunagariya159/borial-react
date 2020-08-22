import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Common/SectionTitle";

//Import Team images
import team1 from "../../assets/images/team/11.jpg";
import team2 from "../../assets/images/team/12.jpg";
import team3 from "../../assets/images/team/13.jpg";
import team4 from "../../assets/images/team/14.jpg";

//Import team box
import TeamBox from "./team-box";

class Team extends Component {
  state = {
    teams: [
      {
        id: 1,
        img: team1,
        name: "Albert Hanks",
        designation: "CEO",
      },
      {
        id: 2,
        img: team2,
        name: "Jody Stokes",
        designation: "Designer",
      },
      {
        id: 3,
        img: team3,
        name: "Patricia Boggan",
        designation: "Manager",
      },
      {
        id: 4,
        img: team4,
        name: "Sharon Trotter",
        designation: "Founder",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {/* <!-- TEAM START --> */}

        <section className="section" id="team">
          <Container>
            <SectionTitle
              title="Our Team Member"
              description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime"
            />

            <Row className="mt-4">
              <TeamBox teams={this.state.teams} />
            </Row>
          </Container>
        </section>

        {/* TEAM END */}
      </React.Fragment>
    );
  }
}

export default Team;
