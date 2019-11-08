import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import Main from '../components/Main';
import MapContainer from '../components/MapContainer';
import PlaceDescription from '../components/placeDescription';
import PlaceRating from '../components/placeRating';
import PlaceCollage from '../components/placeCollage';
import { getPlace } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/App.scss';


const PlaceDetail = (props) => {

  const { id } = props.match.params;
 
  useEffect(() => {
    props.getPlace(id);
  }, []);
  
  const isLookingPlace = Object.keys(props.lookingPlace).length > 0;
  const { lookingPlace } = props;



console.log(props, "props detail", lookingPlace)
    return isLookingPlace ? (
    <>
    <Filters />
    <PlaceCollage/>
    <Main>
      <PlaceDescription id={id} {...lookingPlace}/>
      <PlaceRating id={id} {...lookingPlace}/>
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