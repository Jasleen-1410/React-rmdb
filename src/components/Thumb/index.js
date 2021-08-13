import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';
import "./thumb_hover.css"



// const Thumb = ({ image, movieId, clickable }) => (
//   <div>
//     {clickable ? (
//       <Link to={`/${movieId}`}>
//         <Image src={image} alt='movie-thumb' />
//       </Link>
//     ) : (
//       <Image src={image} alt='movie-thumb' />
//     )}
//   </div>
// );




const Thumb = ({ image, movieId, clickable , title, text }) => (

  <div class="card">
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
        <div class="card__inner">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
        
    </div>
);




Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};

export default Thumb;
