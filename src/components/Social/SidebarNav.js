import React from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./SidebarNav.css";
import "react-typist/dist/Typist.css";




class SidebarNav extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
   

    return (
      <div className="sidebar-nav">
     
        <div className="sidebar-logos" href="/">
          <a href="mailto:felkiriinya@gmail.com" target="_blank" rel="noreferrer">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/felkiriinya" target="_blank" rel="noreferrer">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/felista-kiriinya-bb8490172/" target="_blank" rel="noreferrer">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
          <a href="https://www.instagram.com/felkiriinya/" target="_blank" rel="noreferrer">
            <InstagramIcon style={{ fontSize: 21 }}></InstagramIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
