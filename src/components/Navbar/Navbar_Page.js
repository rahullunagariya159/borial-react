import React, { Component } from "react";
import {
  Container,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

//Import Stickey Header
import StickyHeader from "react-sticky-header";

// import logolight from "../../assets/images/logo-light.png";
// import logodark from "../../assets/images/logo-dark.png";

class NavbarPage extends Component {
  prevScrollpos = 0;

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "service", navheading: "Services" },
        { id: 3, idnm: "portfolio", navheading: "Portfolio" },
        { id: 4, idnm: "client", navheading: "Clients" },
        { id: 5, idnm: "price", navheading: "Pricing" },
        { id: 6, idnm: "team", navheading: "Team" },
        { id: 7, idnm: "blog", navheading: "Blog" },
        { id: 8, idnm: "contact", navheading: "Contact" },
      ],
      isOpen: false,
      topPos: "0",
      isOpenMenu: false,
      navAutoClass: "",
    };
    this.toggleLine = this.toggleLine.bind(this);

    this.handleScrollMenu = this.handleScrollMenu.bind(this);
  }

  handleScrollMenu = async () => {
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      await this.setState({ topPos: "0" });
    } else {
      await this.setState({ topPos: "-420px" });
    }
    this.prevScrollpos = currentScrollPos;

    if (window.innerWidth <= 768) {
      await this.setState({ navAutoClass: "" });
    } else {
      await this.setState({
        navAutoClass: "navbar-nav ml-auto navbar-nav",
      });
    }
  };

  componentDidMount() {
    this.prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", this.handleScrollMenu);
    if (window.innerWidth <= 768) {
      this.setState({ navAutoClass: "" });
    } else {
      this.setState({ navAutoClass: "navbar-nav ml-auto navbar-nav" });
    }
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  toggle = async () => {
    await this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });

    return (
      <React.Fragment>
        <StickyHeader
          header={
            <Navbar
              className={`navbar navbar-expand-lg fixed-top navbar-custom sticky ${
                this.props.isStickyNav === true ? `` : ` nav-sticky`
              }`}
            >
              <Container>
                <NavbarBrand className="navbar-brand logo" href="#">
                  Borial
                </NavbarBrand>
                <NavbarToggler
                  className="navbar-toggler"
                  type="button"
                  aria-label="Toggle navigation"
                  onClick={this.toggle}
                >
                  <i className="mdi mdi-menu" />
                </NavbarToggler>
                <Collapse navbar isOpen={this.state.isOpenMenu} id="navbarNav">
                  <ScrollspyNav
                    scrollTargetIds={targetId}
                    scrollDuration="150"
                    headerBackground="false"
                    activeNavClass="active"
                    navAutoClass={this.state.navAutoClass}
                  >
                    <Nav className="navbar-nav ml-auto" navbar>
                      {this.state.navItems.map((item, key) => (
                        <NavItem
                          key={key}
                          className={
                            item.navheading === "Home"
                              ? "nav-item active"
                              : "nav-item"
                          }
                        >
                          <NavLink href={"#" + item.idnm} className="nav-link">
                            {" "}
                            {item.navheading}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </ScrollspyNav>
                </Collapse>
              </Container>
            </Navbar>
          }
          stickyOffset={-100}
        ></StickyHeader>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
