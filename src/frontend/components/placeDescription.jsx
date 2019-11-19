import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/placeDescription.scss';
import websiteIcon from '../assets/static/website.png';
import phoneIcon from '../assets/static/phone.png';
import { convertPriceRange } from '../utils/helpers';

const PlaceDescription = (props) => {
  const { name, type, priceRange, address, schedule, description, phone, website } = props;

  return (
    <section className='placeDetail__description'>
      <h1>{name}</h1>
      <div>
        <h2>{type}</h2>
        {' '}
          |
        {' '}
        <h2>{convertPriceRange(priceRange)}</h2>
      </div>
      <h3>Dirección</h3>
      <div>{address}</div>
      <h3>Descripción</h3>
      <div className=''>
        {description}
      </div>
      <h3>Horario</h3>
      {
        schedule.map((item, index) => (
          <div className='placeDetail__schedule' id={index}>
            {item}
          </div>
        ))
      }
      <h3>Datos de Contacto</h3>
      <div className='placeDetail__contact'>
        <span className='placeDetail__contact--icon'>
          <img src={phoneIcon} alt='' />
        </span>
        <span className='placeDetail__contact--data'>{phone}</span>
        <span className='placeDetail__contact--icon'>
          <img src={websiteIcon} alt='' />
        </span>
        <span className='placeDetail__contact--data'>{website}</span>
      </div>
    </section>
  );
};

export default connect(null, null)(PlaceDescription);

