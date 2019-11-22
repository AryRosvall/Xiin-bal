import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import PlaceDetailMain from '../components/PlaceDetailMain';
import PlaceDescription from '../components/placeDescription';
import PlaceRating from '../components/placeRating';
import PlaceCollage from '../components/placeCollage';
import { getPlace } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/Base.scss';

const PlaceDetail = (props) => {

  const { lookingPlace, match } = props;
  const { id } = match.params;
  const { rating, votes, location, name, type, priceRange, address, schedule, description, phone, website, catalogImages } = lookingPlace;

  useEffect(() => {
    props.getPlace(id);
  }, []);

  const isLookingPlace = Object.keys(lookingPlace).length > 0;
  console.log(Object.keys(lookingPlace).length);
  return isLookingPlace ? (
    <>
      <Filters />
      <PlaceCollage catalogImages={catalogImages} />
      <PlaceDetailMain>
        <PlaceDescription
          id={id}
          name={name}
          type={type}
          priceRange={priceRange}
          address={address}
          schedule={schedule}
          description={description}
          phone={phone}
          website={website}
        />
        <PlaceRating id={id} votes={votes} rating={rating} location={location} name={name} />
      </PlaceDetailMain>
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
