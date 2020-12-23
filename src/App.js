import { React, useState } from 'react';
import './App.css';
import Home from './Home';
import About from './About'
import Work from './Work'

function App() {
  // eslint-disable-next-line
  const [translate, setTranslate] = useState(0);

  return (
    <div className="slider_container">
      <div className="slider" style={{ left: `${translate}vw` }}>
        <About goToHome={() => setTranslate(-100)} />
        <Home goToAbout={() => setTranslate(0)} goToWork={() => setTranslate(-200)}/>
        <Work goToHome={() => setTranslate(-100)} />
      </div>
    </div>
  );
}

export default App;
