import React from 'react';
import '../assets/styles/components/placecard.scss';
import Photo from '../assets/static/google_place_photo.jpeg';

const PlaceCard = () => {

    return (
        <>
        <div className="place__card">
            <div className="place__card--carousel">
                <img src={Photo} alt="" className="place__card--img"/>
            </div>
            <div className="place__card--details">
                <h2>1. Los tulipanes</h2>
                <h3>Panadería | $$$$$</h3>
                <span>Av. Toluca 1070, Ciudad de México</span>
                <div>Opens at 10:00 AM</div>
                <div className="place__card--rating">9.6 (574)</div>
                <button className="place__card--save">Guardar</button>
            </div>
        </div> 
          <div className="place__card">
          <div className="place__card--carousel">
              <img src={Photo} alt="" className="place__card--img"/>
          </div>
          <div className="place__card--details">
              <h2>1. Los tulipanes</h2>
              <h3>Panadería | $$$$$</h3>
              <span>Av. Toluca 1070, Ciudad de México</span>
              <div>Opens at 10:00 AM</div>
              <div className="place__card--rating">9.6 (574)</div>
              <button className="place__card--save">Guardar</button>
          </div>
      </div> 
        <div className="place__card">
        <div className="place__card--carousel">
            <img src={Photo} alt="" className="place__card--img"/>
        </div>
        <div className="place__card--details">
            <h2>1. Los tulipanes</h2>
            <h3>Panadería | $$$$$</h3>
            <span>Av. Toluca 1070, Ciudad de México</span>
            <div>Opens at 10:00 AM</div>
            <div className="place__card--rating">9.6 (574)</div>
            <button className="place__card--save">Guardar</button>
        </div>
    </div> 
      <div className="place__card">
      <div className="place__card--carousel">
          <img src={Photo} alt="" className="place__card--img"/>
      </div>
      <div className="place__card--details">
          <h2>1. Los tulipanes</h2>
          <h3>Panadería | $$$$$</h3>
          <span>Av. Toluca 1070, Ciudad de México</span>
          <div>Opens at 10:00 AM</div>
          <div className="place__card--rating">9.6 (574)</div>
          <button className="place__card--save">Guardar</button>
      </div>
  </div> 
    <div className="place__card">
    <div className="place__card--carousel">
        <img src={Photo} alt="" className="place__card--img"/>
    </div>
    <div className="place__card--details">
        <h2>1. Los tulipanes</h2>
        <h3>Panadería | $$$$$</h3>
        <span>Av. Toluca 1070, Ciudad de México</span>
        <div>Opens at 10:00 AM</div>
        <div className="place__card--rating">9.6 (574)</div>
        <button className="place__card--save">Guardar</button>
    </div>
</div> 
</>
    );
};

export default PlaceCard; 
