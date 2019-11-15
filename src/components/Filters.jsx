import React from 'react';
import { connect } from 'react-redux';
import { viewFavorites } from '../actions/index';
import '../assets/styles/components/filters.scss';

const Filters = (props) => {

  const handleViewFavorites = () => {
    props.viewFavorites();
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
  viewFavorites,
};

export default connect(null, mapDispatchToProps)(Filters);
