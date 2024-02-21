import React from 'react';
import postImage from '../Assets/ads_poster.jpeg';

const Poster = () => {
    return (
      <div className='poster-container'>
        <img src={postImage} alt="Poster" style={{height: '100%', width: '100%'}}/>
      </div>
    );
  };
  

export default Poster;