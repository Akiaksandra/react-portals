import React, { useState, useEffect } from 'react';
import SwapiService from '../services/swapi-service';
import WindowPortal from '../window-portal/window-portal';

const Swapi = new SwapiService();

const Itemcomponent = (props) => {
  const { name, gender, birthYear, eyeColor} = props;
  const img = Swapi.getPersonImage(props);

  const [ windowVisible, setWindowVisible ] = useState(false);
  const [ buttonVisible, setButtonVisible ] = useState(true);

  const handleOpenPortal = () => {
    setWindowVisible(state => !state)
    setButtonVisible(state => !state)
  }

  const handleReturn = () => {
    setWindowVisible(state => !state)
    setButtonVisible(state => !state)
  }
  const handleClose = () => {
    setWindowVisible(state => !state)
  }
  const closeWindowPortal = () => {
    setWindowVisible(false)
  }

  useEffect(() => {
    window.addEventListener('beforeunload', closeWindowPortal)
  }, [])

  return (
    <div>
      {windowVisible && 
      (
        <WindowPortal closeWindowPortal = {closeWindowPortal}>
          <div className="item-container">
            <img src={img} className="item-img" alt={name}/>
            <ul className="item-details">
              <li>Name: {name}</li>
              <li>Gender: {gender}</li>
              <li>BirthYear: {birthYear}</li>
              <li>EyeColor: {eyeColor}</li>
              <button className="button" onClick={handleReturn}>Come back</button>
              <button className="button" onClick={handleClose}>Close</button>
            </ul>
          </div>
        </WindowPortal>
      )} 
      {buttonVisible && (
        <button className="button" onClick={handleOpenPortal}>{name}</button>
      )} 
    </div>
  );
}

export default Itemcomponent;