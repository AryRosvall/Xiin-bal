import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/placecard.scss';
//import Photo from '../assets/static/google_place_photo.jpeg';

const PlaceCard = (props) => {

  const { id, name, type, priceRange, address, schedule, rating, votes, image, index } = props;

  const handleSetFavorite = () => {
    props.setFavorite({ index });
  };

  /* const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  }; */

  return (
    <>
      <div id={id} className='place__card'>
        <Link to={`/placeDetail/${id}`}>
          <div className='place__card--carousel'>
            <img src={image} alt='' className='place__card--img' />
          </div>
        </Link>
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
          <button type='button' className='place__card--save' onClick={handleSetFavorite}>Guardar</button>
        </div>
      </div>

    </>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(PlaceCard);