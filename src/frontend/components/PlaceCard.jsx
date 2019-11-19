import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/placecard.scss';
import { convertPriceRange, getCookie } from '../utils/helpers';

const PlaceCard = (props) => {

  const { id, name, type, priceRange, address, schedule, rating, votes, image } = props;

  const handleSetFavorite = () => {
    const userId = getCookie('id');
    const token = getCookie('token');
    props.saveFavorite({ userId, id, token });
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
            {'  '}
            |
            {' '}
            {convertPriceRange(priceRange)}
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
  saveFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(PlaceCard);
