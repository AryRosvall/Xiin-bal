import React from 'react';
import '../assets/styles/components/placeDescription.scss';
import websiteIcon from '../assets/static/website.png';
import phoneIcon from '../assets/static/phone.png';



const PlaceDescription = ({ props }) => {
    return (
        <section className="placeDetail__description">
            <h1>Mini Loft Monumento a la Revolucion</h1>
            <h2>Pastelería </h2>
            <h2>$$</h2>
            <h3>Olivar de los Padres, Mexico City</h3>
            <h2>Horario</h2>
            <div className="placeDetail__schedule">
                Mon–Sat 9:00 AM–8:00 PM
          </div>
            <div className="placeDetail__schedule">
                Sun 9:00 AM–4:00 PM
          </div>
            <h2>Datos de Contacto</h2>
            <div className="placeDetail__contact">
                <span className="placeDetail__contact--icon">
                    <img src={phoneIcon} alt="" />
                </span>
                <span className="placeDetail__contact--data">5544332211</span>
                <span className="placeDetail__contact--icon">
                    <img src={websiteIcon} alt="" />
                </span>
                <span className="placeDetail__contact--data">aaaaaaaa@aaaaaaaa.com</span>
            </div>
        </section>
    );
};

export default PlaceDescription;
