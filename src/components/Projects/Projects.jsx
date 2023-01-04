import React,{useEffect} from "react";
import "./Projects.css";
import ExternalLinks from "../ExternalLinks";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const projects = {
    Awwards: {
      desc: "The application allows a user to post a project they have created and get it reviewed by their peers",
      techStack: "HTML, CSS, Python, Django",
      link: "https://github.com/felkiriinya/Awards",
      open: "https://fel-awards.herokuapp.com/accounts/login/?next=/",
    },
    "Instagram Clone": {
      desc: "An instagram clone app that allows you to add photos and view photos added by other users and their profiles.",
      techStack: "HTML, CSS, Python, Django",
      link: "https://github.com/felkiriinya/Instagram-Clone",
      open: "https://felinstagram.herokuapp.com/",
    },
    "Daily News App": {
      desc: "A daily news application done using flask, allows you to display latest news sources and also allows you to read the articles by the source, powered by NEWS API.",
      techStack: "HTML, CSS, Python, Django",
      link: "https://github.com/felkiriinya/Daily-news-app",
      open: "https://daily-news-felista.herokuapp.com/",

    },
  
    "Quality Appraisal": {
      desc: "Quality-Appraisal is a review platform for startup accelerators in Kenya. By gathering feedback shared by startups, Quality informs the decisions of others and helps ensure that future startups partner up with a company that best suits their needs.",
      techStack: "HTML, CSS, Python, Django",
      link: "https://github.com/felkiriinya/Quality-Appraisal",
      open: "https://qualityappraisal.herokuapp.com/",
    },
    "Pitch App": {
      desc: "An application that allows users to post, comment, add a pitch and upvote or downvote one.",
      techStack: "HTML, CSS, Python, Django",
      link: "https://github.com/felkiriinya/Pitch-app",
      open: "",
    },
  };
  return (
    <div id="projects">
      <div className="projects-heading" data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="50" >
        <span className="projects-num">03. </span>Some things I've built <hr />
      </div>

      <div className="project-container" data-aos="fade-up"  data-aos-duration="2000">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon
                    style={{ fontSize: 35 }}
                  ></FolderOpenRoundedIcon>
                </div>
                <ExternalLinks
                  githubLink={projects[key]["link"]}
                  openLink={projects[key].open}
                ></ExternalLinks>
              </div>

              <div className="card-title">{key}</div>
              <div className="card-desc">{projects[key]["desc"]}</div>
              <div className="card-tech">{projects[key]["techStack"]}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
