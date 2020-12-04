import React from 'react';
import './About.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function About(props) {
  return <div className="about_container">
      <button onClick={props.goToHome} className="btn back my_work_btn">
          Back To Home
          <ArrowForwardIcon />
        </button>
  </div>;
}

export default About;
