import React from 'react';
import './About.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import jar from './Jar.png';

function About(props) {
  return (
    <div className="about_container">
      <button onClick={props.goToHome} className="forward">
        Back To Home
        <ArrowForwardIcon />
      </button>
      Stay tuned...
    </div>
  );
}

export default About;