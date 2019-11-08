import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/placeDescription.scss';
import websiteIcon from '../assets/static/website.png';
import phoneIcon from '../assets/static/phone.png';
import { getPlace } from '../actions';


const PlaceDescription = (props) => {
    const { id, name, type, priceRange, address, schedule, description, phone, website } = props;
    //const hasLooking = Object.keys(props.lookingPlace).length > 0;
    
 

  console.log(props, "props de descripción")

    return (
        <section className="placeDetail__description">
            <h1>{name}</h1>
            <h2>{type}</h2>
            <h2>{priceRange}</h2>
            <h3>Dirección</h3>
            <div>{address}</div>
            <h3>Descripción</h3>
            <div className="">
            {description}
          </div>
            <h3>Horario</h3>
            {
                 schedule.map((item, index) =>  
                 <div className="placeDetail__schedule" id={index}>
                 {item}
                </div>
                )
            }
            <h3>Datos de Contacto</h3>
            <div className="placeDetail__contact">
                <span className="placeDetail__contact--icon">
                    <img src={phoneIcon} alt="" />
                </span>
                <span className="placeDetail__contact--data">{phone}</span>
                <span className="placeDetail__contact--icon">
                    <img src={websiteIcon} alt="" />
                </span>
                <span className="placeDetail__contact--data">{website}</span>
            </div>
        </section>
    );
};


  
  export default connect(null, null)(PlaceDescription);
  
