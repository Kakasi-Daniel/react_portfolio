import React, {forwardRef} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import './Project.css';

const Project = forwardRef((props,ref) => {
  return (
    <div className="project" ref={ref}>
      <div className="previews">
        <img className="preview_img" src={props.desktop} alt="" />
        <img className="preview_img_mobile" src={props.mobile} alt="" />
      </div>
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <div className="buttons">
          <a href={props.code} target="_blank" rel="noreferrer" className="btn ">
            View code &nbsp;
            <GitHubIcon />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer" className="btn ">
            Live Demo &nbsp;
            <LanguageIcon />
          </a>
        </div>
        <div className="buttons_mob">
          <a href={props.code} target="_blank" rel="noreferrer" className="btn_mob">
            View code
            <GitHubIcon />
          </a>
          <a href={props.link} target="_blank" rel="noreferrer" className="btn_mob">
            Live Demo
            <LanguageIcon />
          </a>
        </div>
      </div>
    </div>
  );
})

export default Project;
