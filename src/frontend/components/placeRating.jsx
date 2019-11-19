import React from 'react';
import '../assets/styles/components/placerating.scss';
import MiniMap from './MiniMap';
import lolIcon from '../assets/static/lol.png';
import happyIcon from '../assets/static/happy.png';
import sadIcon from '../assets/static/sad.png';

const PlaceRating = (props) => {

  const { rating, votes, location, name, id } = props;

  const locationURL = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.long}`;
  return (
    <section className='placeDetail__rating'>
      <div className='placeDetail__ratingBtn'>
        {rating}
        <sup className='placeDetail__rating--supidc'>/10</sup>
        &nbsp;
        <span className='placeDetail__rating--total'>
          {votes}
          {' '}
        ratings
        </span>
      </div>
      <div className='placeDetail__votes'>
        <span className='placeDetail__votes--icon'>
          {' '}
          <img src={lolIcon} alt='' />
          {' '}
        </span>
        <span className='placeDetail__votes--icon'><img src={happyIcon} alt='' /></span>
        <span className='placeDetail__votes--icon'><img src={sadIcon} alt='' /></span>
      </div>
      <section className='placeDetail__map'>
        <div className='placeDetail__map--container'>
          <MiniMap location={location} name={name} id={id} />
        </div>
        <div className='map__directions'>
          <a href={locationURL} target='_blank' rel='noopener noreferrer'>Get Directions</a>
        </div>
      </section>

    </section>
  );
};

export default PlaceRating;
