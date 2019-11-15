import React from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import Main from '../components/Main';
import Places from '../components/Places';
import PlaceCard from '../components/PlaceCard';
import MapContainer from '../components/MapContainer';
import '../assets/styles/app.scss';

const Home = ({ places }) => {
  return (
    <>
      <Filters />
      <Main>
        <Places>
          {
            places.map((item, index) => <PlaceCard key={item.id} index={index} {...item} />)
          }
        </Places>
        <MapContainer />
      </Main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

export default connect(mapStateToProps, null)(Home);
