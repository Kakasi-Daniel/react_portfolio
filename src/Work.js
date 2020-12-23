import React, { useState } from 'react';
import './Work.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Project from './Project';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ctas from './items/ctas.png';
import ctas_mobile from './items/ctas_mobile.png';
import old from './items/old.png';
import old_mobile from './items/old_mobile.png';
import kstore from './items/kstore.png';
import kstore_mobile from './items/kstore_mobile.png';
import barbut from './items/barbut.png';
import barbut_mobile from './items/barbut_mobile.png';
import gitfind from './items/gitfind.png';
import gitfind_mobile from './items/gitfind_mobile.png';
import dbook from './items/dbook.png';
import dbook_mobile from './items/dbook_mobile.png';
import trackcalorie from './items/trackcalorie.png';
import trackcalorie_mobile from './items/trackcalorie_mobile.png';

const ctasDesc =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quam, molestiae repudiandae delectus ipsam, odio consequatur molestias maiores hic ipsum totam illo nemo optio impedit laboriosam alias. Ipsa distinctio nobis quibusdam?';

function Work(props) {
  let [translate, setTranslate] = useState(0);

  const prevSlide = () => {
    const totalProjects = document.querySelectorAll('.project').length;
    const projectWidth = document.querySelector('.projects_slider').clientWidth;
    let newTranslate;
    if (translate === 0) {
      newTranslate = -(totalProjects - 1) * projectWidth;
    } else {
      newTranslate = translate + projectWidth;
    }

    setTranslate(newTranslate);
  };

  const nextSlide = () => {
    const totalProjects = document.querySelectorAll('.project').length;
    const projectWidth = document.querySelector('.projects_slider').clientWidth;
    const projectsWidth = -projectWidth * (totalProjects - 1);
    console.log(projectsWidth);

    let value;

    value = translate - projectWidth;

    if (translate === projectsWidth) {
      value = 0;
    }

    console.log(value);
    setTranslate(value);
  };

  return (
    <div className="work_container">
      <button onClick={props.goToHome} className="btn back my_work_btn">
        Back To Home
        <ArrowBackIcon />
      </button>
      <button className="mobile_back" onClick={props.goToHome}>
        <ArrowBackIcon />
      </button>
      <div className="projects_container">
        <button className="arrow arrow_left" onClick={prevSlide}>
          <ArrowBackIosIcon className="fs_large" />
        </button>
        <button className="arrow arrow_right" onClick={nextSlide}>
          <ArrowForwardIosIcon className="fs_large" />
        </button>
        <div className="projects_slider">
          <div
            className="projects_slide"
            style={{ transform: `translateX(${translate}px)` }}
          >
            <Project
              desktop={ctas}
              mobile={ctas_mobile}
              title="College Landing Site"
              desc={ctasDesc}
              code="https://github.com/Kakasi-Daniel/Saligny"
              link="https://saligny.netlify.app/"
            />
            <Project
              desktop={old}
              mobile={old_mobile}
              title="My old Portfolio"
              desc={ctasDesc}
              code="https://github.com/Kakasi-Daniel/kakasi"
              link="https://kakasidaniel.netlify.app/"
            />
            <Project
              desktop={kstore}
              mobile={kstore_mobile}
              title="Ecommerce front-end"
              desc={ctasDesc}
              code="https://github.com/Kakasi-Daniel/Kstore"
              link="https://elegant-joliot-20bd3b.netlify.app/"
            />
            <Project
              desktop={barbut}
              mobile={barbut_mobile}
              title="Barbut"
              desc={ctasDesc}
              code="https://github.com/Kakasi-Daniel/Barbut"
              link="https://barbut.netlify.app/"
            />
            <Project
              desktop={gitfind}
              mobile={gitfind_mobile}
              title="GitHub Api Demo"
              desc={ctasDesc}
              code="https://github.com/Kakasi-Daniel/GitFind"
              link="https://kksigit.netlify.app/"
            />
            <Project
              desktop={dbook}
              mobile={dbook_mobile}
              title="Social Platform front-end"
              desc={ctasDesc}
              code="https://github.com/Kakasi-Daniel/ShitBook"
              link="https://socialpageapp.netlify.app/"
            />
            <Project
              desktop={trackcalorie}
              mobile={trackcalorie_mobile}
              title="TrackCalories"
              desc={ctasDesc}
              code="https://github.com/Kakasi-Daniel/TrackCalories"
              link="https://tcalories.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
