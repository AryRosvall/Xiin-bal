import React from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import Main from '../components/Main';
import Places from '../components/Places';
import PlaceCard from '../components/PlaceCard';
import MapContainer from '../components/MapContainer';
import '../assets/styles/Base.scss';

const Home = ({ places }) => {

  return (
    <>
      <Filters />
      <Main>
        <Places>
          {
            places.map((item, index) => (
              <PlaceCard
                key={item.id}
                index={index}
                id={item.id}
                name={item.name}
                type={item.type}
                priceRange={item.priceRange}
                address={item.address}
                schedule={item.schedule}
                rating={item.rating}
                votes={item.votes}
                image={item.mainImage}
              />
            ))
          }
        </Places>
        <MapContainer />
      </Main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.filteredPlaces,
  };
};

export default connect(mapStateToProps, null)(Home);
