import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/placecard.scss';

const PlaceCard = (props) => {

  const { id, name, type, priceRange, address, schedule, rating, votes, image } = props;

  function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

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
  saveFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(PlaceCard);
