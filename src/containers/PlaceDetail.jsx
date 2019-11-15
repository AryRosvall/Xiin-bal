import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import Main from '../components/Main';
import PlaceDescription from '../components/placeDescription';
import PlaceRating from '../components/placeRating';
import PlaceCollage from '../components/placeCollage';
import { getPlace } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/app.scss';

const PlaceDetail = (props) => {

  const { lookingPlace, match } = props;
  const { id } = match.params;
  const { rating, votes, location, name } = lookingPlace;

  useEffect(() => {
    props.getPlace(id);
  }, []);

  const isLookingPlace = Object.keys(lookingPlace).length > 0;

  return isLookingPlace ? (
    <>
      <Filters />
      <PlaceCollage />
      <Main>
        <PlaceDescription id={id} {...lookingPlace} />
        <PlaceRating id={id} votes={votes} rating={rating} location={location} name={name} />
      </Main>
    </>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    lookingPlace: state.lookingPlace,
  };
};

const mapDispatchToProps = {
  getPlace,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);
