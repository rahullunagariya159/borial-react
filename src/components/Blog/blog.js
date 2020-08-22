import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../Common/SectionTitle";

//Import images
import blog1 from "../../assets/images/blog/1.jpg";
import blog2 from "../../assets/images/blog/2.jpg";
import blog3 from "../../assets/images/blog/3.jpg";

import { Link } from "react-router-dom";

class Services extends Component {
  state = {
    blog: [
      {
        title: "UI & UX Design",
        subTitle: "Web Developer Bootcamp",
        img: blog1,
        description:
          "Lorem ipsum dolor consectetur elit adipiscing tha seding do eiusmod tempor.",
        link: "#",
      },
      {
        title: "Digital Marketing",
        subTitle: "How to Growth Hacking",
        img: blog2,
        description:
          "Lorem ipsum dolor consectetur elit adipiscing tha seding do eiusmod tempor.",
        link: "#",
      },
      {
        title: "Apps Design",
        subTitle: "IOS App Development",
        img: blog3,
        description:
          "Lorem ipsum dolor consectetur elit adipiscing tha seding do eiusmod tempor.",
        link: "#",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {/* BLOG START  */}
        <section className="section bg-light" id="blog">
          <Container>
            <SectionTitle
              title="latest Blog"
              description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime"
            />
            <Row className="mt-4">
              {this.state.blog.map((blog, key) => (
                <Col lg={4} key={key}>
                  <div className="blog-menu mt-4">
                    <img src={blog.img} className="img-fluid" alt="blog-img" />
                    <div>
                      <h5 className="mt-4">{blog.title}</h5>
                      <h4>
                        <Link to={blog.link} className="blog-title">
                          {blog.subTitle}
                        </Link>
                      </h4>
                      <p className="mt-2 text-muted">{blog.description}</p>
                      <div className="mt-3">
                        <Link to={blog.link} className="read-btn">
                          Read More <i className="mdi mdi-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* BLOG END  */}
      </React.Fragment>
    );
  }
}

export default Services;
