import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Africa’s Pocket": {
      jobTitle: "Frontend Engineer  @",
      duration: "June 2022 - Present",
      desc: [
      

        "Developed Camp Mulla-  a wealth-building platform built for Africans that allows you to make a personalized financial plan, invest for long and short-term goals and track your progress and learn as you go all in one account leading to a recurring revenue scale",
        "Designed using Figma and created using Webflow for the company’s main educational site hence improving its user interface and experience, leading to a 30% increase in recurring users for the front end",
        
      ],
    },
    "FinAccess": {
      jobTitle: "Software Engineer Intern @",
      duration: "SEP 2021 - Dec 2021",
      desc: [
      

        "Developed GroBox - a web app for dairy cooperatives that tracks and records milk production to make informed decisions and improve outcomes including access to credit",
        "Designed using Figma and created using Angular for the front end.s",
        "Improved accuracy of information collected up to 75% which is important to various stakeholders including banks, farmers and vendors.",
        "Designed the UI for Fincore, a web app for Saccos using Figma. Before the project development phase, developed layouts that satisfy the requirements to ensure client satisfaction.",
      ],
    },
    "Mawingu Networks": {
      jobTitle: "Software Developement Intern @",
      duration: "Jan 2021 - April 2021",
      desc: [
   

"Worked with an agile team in improving the user interface and user experience of the existing Internal applications using React for web development and Figma for the designs which increased mobile traffic by 20%.",
        "Reiterated user feedback into the application’s design as well as tested the usability of software before deployment.",
        "Assisted Senior Front End Developers in designing web applications, learning how to align designs with customer needs, connect with clients, present designs, and handle feedback on work.",
      ],
    },
   
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#64ffda",
          },
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
            sx={{
              fontFamily: "NTR",
              fontSize: "1.5rem",
              display: "inline-flex",
              alignItems: "flex-start",
              marginLeft: "5.5rem",
            }}
          />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <div>
                  <li key={i}>{descItem}</li>
                </div>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
