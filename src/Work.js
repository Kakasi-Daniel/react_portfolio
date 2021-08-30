import React, { useState, useRef } from 'react';
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
import ipTrack from './items/ipTrack.png';
import ipTrack_mobile from './items/ipTrack_mobile.png';
import billSplitter from './items/billSplitter.png';
import billSplitter_mobile from './items/billSplitter_mobile.png';
import shortly from './items/shortly.png';
import shortly_mobile from './items/shortly_mobile.png';
import FSEGA from './items/FSEGA.png';
import FSEGA_mobile from './items/FSEGA_mobile.png';
import aps from './items/aps.png';
import aps_mobile from './items/aps_mobile.png';
import pixArt from './items/pixArt.png';
import pixArt_mobile from './items/pixArt_mobile.png';

const ctasDesc =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quam, molestiae repudiandae delectus ipsam, odio consequatur molestias maiores hic ipsum totam illo nemo optio impedit laboriosam alias. Ipsa distinctio nobis quibusdam?';

const PROJECTS = [
  {
    desktop: aps,
    mobile: aps_mobile,
    title: 'Audio Planet Store',
    desc: "This one is my favorite. Technologies that I used to build this: SASS, REACT, REACT-ROUTER, useReducer along with Context API. Users are able to authenticate and store their data glad to Google's Firebase Backend System.",
    code: 'https://github.com/Kakasi-Daniel/audio_planet_store',
    link: 'https://audioplanetstore.web.app/'
  },
  {
    desktop: pixArt,
    mobile: pixArt_mobile,
    title: 'Pix Art',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/Code-Challenge-3---Pixel-Art',
    link: 'https://pixelartudg.netlify.app/',
  },
  {
    desktop: ipTrack,
    mobile: ipTrack_mobile,
    title: 'IP Tracker',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/ip-address-tracker-master',
    link: 'https://elastic-curie-1fe812.netlify.app/',
  },
  {
    desktop: ctas,
    mobile: ctas_mobile,
    title: 'College Landing Site',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/Saligny',
    link: 'https://saligny.netlify.app/',
  },
  {
    desktop: old,
    mobile: old_mobile,
    title: 'My old Portfolio',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/kakasi',
    link: 'https://kakasidaniel.netlify.app/',
  },
  {
    desktop: kstore,
    mobile: kstore_mobile,
    title: 'Ecommerce front-end',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/Kstore',
    link: 'https://elegant-joliot-20bd3b.netlify.app/',
  },
  {
    desktop: FSEGA,
    mobile: FSEGA_mobile,
    title: 'University allocation results app',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/FSEGA_aloritm_repartizare_candidati',
    link: 'https://relaxed-bhaskara-40b6f1.netlify.app/',
  },
  {
    desktop: shortly,
    mobile: shortly_mobile,
    title: 'Address shorter (dead API)',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/url-shortening-api-master',
    link: 'https://practical-kalam-c8667b.netlify.app/',
  },
  {
    desktop: billSplitter,
    mobile: billSplitter_mobile,
    title: 'Bill Splitter',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/tip-calculator-app-main',
    link: 'https://festive-jackson-317800.netlify.app/',
  },
  {
    desktop: barbut,
    mobile: barbut_mobile,
    title: 'Barbut',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/Barbut',
    link: 'https://barbut.netlify.app/',
  },
  {
    desktop: gitfind,
    mobile: gitfind_mobile,
    title: 'GitHub Api Demo',
    desc:  ctasDesc ,
    code: 'https://github.com/Kakasi-Daniel/GitFind',
    link: 'https://kksigit.netlify.app/',
  },
  {
    desktop: dbook,
    mobile: dbook_mobile,
    title: 'Social Platform front-end',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/ShitBook',
    link: 'https://socialpageapp.netlify.app/',
  },
  {
    desktop: trackcalorie,
    mobile: trackcalorie_mobile,
    title: 'TrackCalories',
    desc: ctasDesc,
    code: 'https://github.com/Kakasi-Daniel/TrackCalories',
    link: 'https://tcalories.netlify.app/',
  },
];

function Work(props) {
  const [translate, setTranslate] = useState(0);
  const project = useRef();
  const totalProjects = PROJECTS.length;
  const projectWidth = project.current?.clientWidth;

  window.onresize = () => {
    setTranslate(0);
  };

  const prevSlide = () => {
    let newTranslate;
    if (translate === 0) {
      newTranslate = -(totalProjects - 1) * projectWidth;
    } else {
      newTranslate = translate + projectWidth;
    }

    setTranslate(newTranslate);
  };

  const nextSlide = () => {
    const projectsWidth = -projectWidth * (totalProjects - 1);
    let value;
    value = translate - projectWidth;
    if (translate === projectsWidth) {
      value = 0;
    }

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
        <div className="projects_slider" ref={project}>
          <div
            className="projects_slide"
            style={{ transform: `translateX(${translate}px)` }}
          >
            {PROJECTS.map((projectProps) => (
              <Project
                key={projectProps.link}
                desktop={projectProps.desktop}
                mobile={projectProps.mobile}
                title={projectProps.title}
                desc={projectProps.desc}
                code={projectProps.code}
                link={projectProps.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
