import React from 'react';
import  './Card.css';

const Card = ({ name, expertise, photo}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
       <img alt='pic' src={photo} />
      <div>
        <h2>{name}</h2>
        <p>{expertise}</p>
      </div>
    </div>
  );
}

export default Card;
