import React,{useEffect} from "react";
import "./About.css";
import person from "../../images/person.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const two = (
    <p>
      Outside of work, I'm interested in following the advancement of
      technology and art. I also paint and read a lot of fictional books from time to time.
    </p>
  );
  const tech_stack = [
    "Javascript ES6+",
    "Python",
    "React.js",
    "Node.js",
    "HTML & CSS",
   "UI/UX Design",
   "Figma"
  ];

  const tech_items = tech_stack.map((stack) => <li>{stack}</li>);
  return (
    <div id="about">
      <div className="about-heading" data-aos="fade-up"  data-aos-duration="1000">
        <span className="about-num">01. </span>About Me <hr />
      </div>
      <div className="container">
        <p className="about-text" data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50">
          Hello! My name is Felista and I enjoy creating things that live on the
          internet. I am a <span className="highlight"> Software Engineering Student </span>
        at the{" "}
          <span className="highlight">
            {" "}
            African Leadership University.
          </span>{" "}
          I am passionate about building software that is both beautiful and
          functional. I'm quietly confident, naturally curious, and perpetually working on {" "}
          <span className="highlight">
          improving my chops one design problem at a time.
          </span>
          <div className="about-description">
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack" data-aos="fade-up"  data-aos-duration="2000">
              {tech_stack.map(function (tech_item, i) {
                return (
                  <div>
                    <li>{tech_item}</li>
                  </div>
                );
              })}
            </ul>
            {[two]}
          </div>
        </p>
        <div className="about-image" data-aos="fade-up"  data-aos-duration="2000">
          <img src={person} alt="person" className="person" />
        </div>
      </div>
    </div>
  );
};

export default About;
