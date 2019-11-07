import React from 'react';
import '../assets/styles/components/placecard.scss';
import { Link } from 'react-router-dom';
//import Photo from '../assets/static/google_place_photo.jpeg';

const PlaceCard = (props) => {

  const { id, name, type, priceRange, address, schedule, rating, votes, image } = props;

  return (
    <>
      <Link to={`/placeDetail/${id}`}>
      <div id={id} className='place__card'>
        <div className='place__card--carousel'>
          <img src={image} alt='' className='place__card--img' />
        </div>
        <div className='place__card--details'>
          <h2>{name}</h2>
          <h3>
            {type}
            {' '}
            |
            {' '}
            {priceRange}
          </h3>
          <span>{address}</span>
          <div>{schedule}</div>
          <div className='place__card--rating'>
            {rating}
            {' '}
            (
            {votes}
            )
          </div>
          <button type='button' className='place__card--save'>Guardar</button>
        </div>
      </div>
      </Link>
    </>
  );
};


export default PlaceCard;