import React from 'react';
import Filters from '../components/Filters';
import Main from '../components/Main';
import MapContainer from '../components/MapContainer';
import PlaceDescription from '../components/placeDescription';
import PlaceRating from '../components/placeRating';
import PlaceCollage from '../components/placeCollage';
import '../assets/styles/App.scss';


const PlaceDetail = (props) => {
    return (
    <>
    <Filters />
    <PlaceCollage/>
    <Main>
      <PlaceDescription/>
      <PlaceRating/>
    </Main>
  </>
  );
};

export default PlaceDetail;
