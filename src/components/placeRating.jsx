import React from 'react';
import '../assets/styles/components/placerating.scss';
import MapContainer from '../components/MapContainer';
import lolIcon from '../assets/static/lol.png';
import happyIcon from '../assets/static/happy.png';
import sadIcon from '../assets/static/sad.png';


const PlaceRating = ({ children }) => {
    return (
        <section className="placeDetail__rating">
            <div className="placeDetail__ratingBtn">9.6 <sup className="placeDetail__rating--supidc">/10</sup>
                <span className="placeDetail__rating--total">769 ratings</span>
            </div>
            <div className="placeDetail__votes">
                <span className="placeDetail__votes--icon"> <img src={lolIcon} alt="" /> </span>
                <span className="placeDetail__votes--icon"><img src={happyIcon} alt="" /></span>
                <span className="placeDetail__votes--icon"><img src={sadIcon} alt="" /></span>
            </div>
            <section className="placeDetail__map">
            
                <div className="map__directions">
                    <a href="/">Get Directions</a>
                </div>
            </section>

        </section>
    );
};

export default PlaceRating;
