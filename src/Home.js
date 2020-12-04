import React, { useState } from 'react';
import './Home.css';
import hill from './hill.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Page1(props) {
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem('time')) || false
  );

  let background = time
    ? `url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Starry-night-sky-cloud-digital-art-1920x1080-wallpapers.jpg') center center/cover no-repeat`
    : `url('https://i.pinimg.com/originals/6d/df/89/6ddf89a95cc31286387b11c64c1991a8.jpg') center center/cover no-repeat`;

  return (
    <div className="page1_container" style={{ background: `${background}` }}>
      <div
        onClick={() => {
          setTime(!time);
          localStorage.setItem('time', !time);
        }}
        className="moon"
        style={time ? {transform: 'translateX(-50%) translateY(-0vh)'} : {transform: 'translateX(-50%) translateY(-50vh)'}}
      ></div>
      <div
        onClick={() => {
          setTime(!time);
          localStorage.setItem('time', !time);
        }}
        className="sun"
        style={time ? {transform: 'translateX(-50%) translateY(-50vh)'} : {transform: 'translateX(-50%) translateY(-5vh)'}}
      ></div>
      <h1 className="hero">
        <button onClick={props.goToAbout} className="btn about_me_btn">
          <ArrowBackIcon />
          &nbsp;&nbsp;&nbsp;About me
        </button>
        <div className="st">Daniel</div>
        <div className="nd color_white">KKsi</div>
        <button onClick={props.goToWork} className="btn my_work_btn">
          View My work
          <ArrowForwardIcon />
        </button>
      </h1>
      <img
        className="hill"
        src={hill}
        alt=""
        style={
          time ? { filter: 'brightness(150%)' } : { filter: 'brightness(500%)' }
        }
      />
      <div className="mobile_navigation">
        <button onClick={props.goToAbout} className="about_me_mobile">
          <ArrowBackIcon />
          About me
        </button>
        <button onClick={props.goToWork} className="my_work_mobile">
          View My work
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Page1;
