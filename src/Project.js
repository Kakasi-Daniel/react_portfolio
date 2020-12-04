import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import './Project.css';

function Project(props) {
  return (
    <div className="project">
      <div className="previews">
        <img className="preview_img" src={props.desktop} alt="" />
        <img className="preview_img_mobile" src={props.mobile} alt="" />
      </div>
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <div className="buttons">
          <a href={props.code} target="_blank" className="btn ">
            View code &nbsp;
            <GitHubIcon />
          </a>
          <a href={props.link} target="_blank" className="btn ">
            Live Demo &nbsp;
            <LanguageIcon />
          </a>
        </div>
        <div className="buttons_mob">
          <a href={props.code} target="_blank" className="btn_mob">
            View code
            <GitHubIcon />
          </a>
          <a href={props.link} target="_blank" className="btn_mob">
            Live Demo
            <LanguageIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
