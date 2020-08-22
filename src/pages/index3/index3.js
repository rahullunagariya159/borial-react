import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Welcome from "../../components/Welcome/welcome";
import Services from "../../components/Services/services";
import Portfolio from "../../components/Portfolio/portfolio";
import Clients from "../../components/Clients/clients";
import Pricing from "../../components/Pricing/pricing";
import Team from "../../components/Team/team";
import GetStarted from "../../components/GetStarted/get-started";
import Blog from "../../components/Blog/blog";
import ContactUs from "../../components/Get in Touch/get-in-touch";
import Footer from "../../components/Footer/footer";

class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      isStickyNav: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    this.scrollNavigation();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;

    if (scrollup > this.state.pos) {
      this.setState({ navClass: "darkheader", imglight: false });
      this.setState({ isStickyNav: false });
    } else if (window.innerWidth <= 768) {
      this.setState({ navClass: "darkheader", imglight: false });
      this.setState({ isStickyNav: false });
    } else {
      this.setState({ navClass: "", imglight: false });
      this.setState({ isStickyNav: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}

        <NavbarPage
          navclass={this.state.navClass}
          imglight={this.state.imglight}
          isStickyNav={this.state.isStickyNav}
        />

        {/* import section */}
        <Section />

        {/* import Welcome */}
        <Welcome />

        {/* import services */}
        <Services />

        {/* import Portfolio */}
        <Portfolio />

        {/* import Clients */}
        <Clients />

        {/* import Pricing */}
        <Pricing />

        {/* import Team */}
        <Team />

        {/* import Get started */}
        <GetStarted />

        {/* import Blog */}
        <Blog />

        {/* import ContactUs */}
        <ContactUs />

        {/* import Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
