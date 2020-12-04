import React from 'react';
import './Work.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function About(props) {
  return <div className="about_container">
    <section id="about">
        <div id="about-img"><img src="https://kakasidaniel.netlify.app/img/about.jpg" alt=""/></div>
        <div id="about-text">
          <h2>About me</h2>
          <ul>
            <li><span class="bold" >Age: &nbsp; </span> 18</li>
            <li><span class="bold" >Nationality: &nbsp; </span> Romanian</li>
            <li><span class="bold" >Knowledges: &nbsp; </span>C++, Unreal Engine, HTML, CSS, JavaScript, Adobe Suite, BootStrap, WebPack,GIT
          </li>
          </ul>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum ratione, et ut voluptate facilis nam porro, obcaecati quae iure natus error, fugiat inventore deserunt iusto ea expedita odit! Velit sunt totam amet! Ad, doloribus eveniet nesciunt illo ab sapiente corrupti deleniti excepturi placeat minus pariatur praesentium error? Dignissimos, quam?
          </p>
  
        </div>
      </section>
      <button onClick={props.goToHome} className="btn back my_work_btn">
          Back To Home
          <ArrowForwardIcon />
        </button>
  </div>;
}

export default About;
