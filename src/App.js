import React from 'react';
import albumart from './albumart.jpg';
import withParallax from './withParallax'
import Countdown from './countdown'
import './App.css';

function App(props) {
  return (
    <div className="wrapper">
      <div className="wrapper2"></div>
      <div className="wrapper3"></div>
      <img className='album-art' src={albumart} />
      <p className='title' style={{transform: 'translateY('+0.45*props.scrollTop+'px)'}}>HOUSTON</p>
      <Countdown className='countdown' date='April 25, 2020 23:59:59' />

      <div className='tracklist'>
        <ul>
          <li>Lift Off (feat. John F. Kennedy)</li>
          <li>Breaching the Atmosphere</li>
          <li>Trucking through Space</li>
          <li>Pop that Bitch Out / / Joe's Interlude </li>
          <li>Acoustic Guitar</li>
          <li>Deep Space</li>
          <li>Outro</li>
        </ul>
      </div>
    </div>
  );
}

export default withParallax(App);
