import React from 'react';
import Filters from '../components/Filters';
import Main from '../components/Main';
import Places from '../components/Places';
import PlaceCard from '../components/PlaceCard';
import MapContainer from '../components/MapContainer';
import '../assets/styles/App.scss';

const Home = () => {
    return(
        <>
        <Filters/>
        <Main>
            <Places>
                <PlaceCard></PlaceCard>
            </Places>
            <MapContainer/>
        </Main>
        </>
    );
};

export default Home; 