import { React, useState } from 'react';
import './App.css';
import Page1 from './Page1';

function App() {
  // eslint-disable-next-line
  const [translate, setTranslate] = useState(0);

  return (
    <div className="slider_container">
      <div className="slider" style={{ left: `${translate}vw` }}>
        <Page1 />
        <Page1 />
        <Page1 />
      </div>
    </div>
  );
}

export default App;
