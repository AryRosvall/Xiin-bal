import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveFavorite, deleteFavorite } from '../actions';
import { convertPriceRange, getCookie } from '../utils/helpers';
import favoriteIcon from '../assets/static/favorite.png';
import '../assets/styles/components/placecard.scss';

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
          <span>
            {type}
            {'  '}
            |
            {' '}
            {convertPriceRange(priceRange)}
          </span>
          <span>{address}</span>
          <div>
            <br />
            <b>Horario</b>
            <br />
            {
              schedule.map((item, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                );
              })
            }
            <br />
          </div>
          <div className='place__card--rating'>
            <b>Rating: </b>
            {' '}
            {rating}
            {' '}
            (
            {votes}
            )
          </div>

        </div>
        <div className='place__card--saveContainer'>
          <img className='place__card--favorite' src={favoriteIcon} alt='' onClick={handleSetFavorite} />
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
