import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
  state = {
    footerItems: [
      {
        title: "About Borial",
        links: [
          { linkTitle: "About Us", link: "#" },
          { linkTitle: "Press", link: "#" },
          { linkTitle: "Job Opening", link: "#" },
          { linkTitle: "Terms", link: "#" },
          { linkTitle: "Privacy", link: "#" },
        ],
      },
      {
        title: "Help Center",
        links: [
          { linkTitle: "Accounting", link: "#" },
          { linkTitle: "Billing", link: "#" },
          { linkTitle: "General Question", link: "#" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="footer bg-dark">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="footer-menu">
                  <h5 className="mb-4 text-uppercase">Borial</h5>
                  <p>
                    The Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium eaque quae ab illo inventore
                    veritatis et.
                  </p>
                  <div className="text-white">
                    <Link to="#facebook">
                      <i className="mdi mdi-facebook facebook footer_mdi" />
                    </Link>
                    <Link to="#twitter">
                      <i className="mdi mdi-twitter twitter footer_mdi" />
                    </Link>
                    <Link to="#google">
                      <i className="mdi mdi-google google footer_mdi" />
                    </Link>
                    <Link to="#apple">
                      <i className="mdi mdi-apple apple footer_mdi" />
                    </Link>
                  </div>
                </div>
              </Col>
              {this.state.footerItems.map((item, key) => (
                <Col lg={2} key={key}>
                  <div className="footer-menu">
                    <h5 className="mb-4 text-uppercase">{item.title}</h5>
                    <ul className="text-muted list-unstyled">
                      {item.links.map((fLink, key) => (
                        <li key={key}>
                          <Link to={fLink.link}>{fLink.linkTitle}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col lg={4}>
                <div className="footer-menu">
                  <h5 className="mb-4 text-uppercase">Contact us</h5>
                  <p>
                    The Nam eget dui Etiam rhoncus. Maecenas eget sem quam
                    semper libero.
                  </p>
                  <span className="footer-support">Support@abc.com</span>
                </div>
              </Col>
            </Row>
            <FooterLinks />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Footer;
