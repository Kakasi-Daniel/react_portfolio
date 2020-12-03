import React, { useState } from 'react';
import './Page1.css';
import hill from './hill.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Page1() {
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem('time')) || false
  );


  let moonSun = time ? (
      <div onClick={() => {
        setTime(!time);
        localStorage.setItem('time', !time);
      }} className="moon"></div>
    ) : (
      <div onClick={() => {
        setTime(!time);
        localStorage.setItem('time', !time);
      }}className="sun"></div>
    );

  let backgroundGradient = time
    ? `linear-gradient(
    180deg,
    rgba(66, 8, 7, 1) 0%,
    rgba(221, 114, 0, 1) 59%,
    rgba(118, 19, 0, 1) 100%
  )`
    : `linear-gradient(
    180deg,
    rgba(42, 151, 216, 1) 0%,
    rgba(200, 240, 252, 1) 78%,
    rgba(246, 251, 254, 1) 100%
  )`;

  return (
    <div
      className="page1_container"
      style={{
        background: `${backgroundGradient}`,
      }}
    >
      {moonSun}
      <h1 className="hero">
        <button className="btn about_me_btn">
          <ArrowBackIcon />
          &nbsp;&nbsp;&nbsp;About me
        </button>
        <div className="st">Daniel</div>
        <div className="nd color_white">KKsi</div>
        <button className="btn my_work_btn">
          View My work
          <ArrowForwardIcon />
        </button>
      </h1>
      <img className="hill" src={hill} alt="" />
      <div className="mobile_navigation">
        <button className="about_me_mobile">
          <ArrowBackIcon />
          About me
        </button>
        <button className="my_work_mobile">
          View My work
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Page1;
