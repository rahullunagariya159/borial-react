import React, { Component } from "react";
import { Col } from "reactstrap";
class TeamBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.teams.map((team, key) => (
          <Col col={3} key={key}>
            <div className="team-member mt-4 text-center">
              <img src={team.img} className="img-fluid" alt="teamImage" />
              <div>
                <h4 className="mt-3">{team.name}</h4>
                <p>{team.designation}</p>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default TeamBox;
