import React from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/index';
import '../assets/styles/components/filters.scss';

const Filters = (props) => {

  function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  const handleViewFavorites = () => {
    const userId = getCookie('id');
    const token = getCookie('token');
    props.getFavorites(userId, token);
  };

  return (
    <section className='filters'>
      <button type='button' className='filters__btn'>Precio</button>
      <button type='button' className='filters__btn'>Abierto ahora</button>
      <button type='button' className='filters__btn'>Especiales</button>
      <button type='button' className='filters__btn'>No he estado</button>
      <button type='button' className='filters__btn'>Guardado</button>
      <button type='button' className='filters__btn' onClick={handleViewFavorites}>Favoritos</button>
    </section>
  );
};

const mapDispatchToProps = {
  getFavorites,
};

export default connect(null, mapDispatchToProps)(Filters);
