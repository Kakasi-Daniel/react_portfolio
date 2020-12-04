import React from 'react';
import './Work.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Work(props) {
  return <div className="work_container">
      <div id="items">
        <div class="item">
          <img id="site" src="./img/items/kstore.png" alt="" />
          <div class="title">
            <h1>Kstore</h1>
            <p>eCommerce App with firebase Auth</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://elegant-joliot-20bd3b.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>
        <div class="item">
          <img id="site" src="./img/items/item15.png" alt="" />
          <div class="title">
            <h1>On progress</h1>
            <p>College landing website</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://saligny.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item12.png" alt="" />
          <div class="title">
            <h1>GitFind</h1>
            <p>Find users from Github via GitHub API</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://kksigit.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item13.png" alt="" />
          <div class="title">
            <h1>TrackCalories</h1>
            <p>Using JavaScript Design Patterns</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://tcalories.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item9.png" alt="" />
          <div class="title">
            <h1>Barbut</h1>
            <p>Just for fun</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://barbut.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item11.png" alt="" />
          <div class="title">
            <h1>Task List</h1>
            <p>Local Storage project</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://tlistk.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item1.png" alt="" />
          <div class="title">
            <h1>Câmpenești</h1>
            <p>Short presentation of my natal city.</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://goofy-mcnulty-189da6.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item10.png" alt="" />
          <div class="title">
            <h1>DbooK</h1>
            <p>Unfinished</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://socialpageapp.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item8.png" alt="" />
          <div class="title">
            <h1>GTA_Series</h1>
            <p>Demo page of scroll actions</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://xenodochial-cray-541b22.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item3.png" alt="" />
          <div class="title">
            <h1>EdgeLedger</h1>
            <p>Company landing website</p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://modest-meitner-8b315a.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item16.png" alt="" />
          <div class="title">
            <h1>Currency exchanger</h1>
            <p></p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://kksicrex.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item14.png" alt="" />
          <div class="title">
            <h1>MemeTemp Generator</h1>
            <p></p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://unruffled-davinci-494ffa.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>

        <div class="item">
          <img id="site" src="./img/items/item17.png" alt="" />
          <div class="title">
            <h1>Css animation</h1>
            <p></p>
          </div>
          <div class="my">
            <a
              id="launch"
              target="_blank"
              href="https://naughty-lamarr-6cc448.netlify.app/"
              class="btn-light"
              >View project</a
            >
          </div>
        </div>
      </div>
      <button onClick={props.goToHome} className="btn back my_work_btn">
          Back To Home
          <ArrowBackIcon />
        </button>
  </div>;
}

export default Work;
