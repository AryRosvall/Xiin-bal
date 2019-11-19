import React from 'react';
import { connect } from 'react-redux';
import { getFavorites, getPlaces } from '../actions/index';
import { getCookie } from '../utils/helpers';
import '../assets/styles/components/filters.scss';

const Filters = (props) => {

  const handleViewFavorites = () => {
    const userId = getCookie('id');
    const token = getCookie('token');
    props.getFavorites(userId, token);
  };

  const handleViewFilter = (filter) => {
    props.getPlaces(filter);
  };

  return (
    <section className='filters'>
      <button type='submit' className='filters__btn' onClick={() => handleViewFilter('Comida')}>Comida</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Café')}>Café</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Nocturna')}>Nocturna</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Diversión')}>Diversión</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Compras')}>Compras</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Precio')}>Precio</button>
      <button type='submit' className='filters__btn' onClick={handleViewFavorites}>Favoritos</button>
      <button type='submit' className='filters__btn' onClick={() => handleViewFilter('All')}>Todos</button>
    </section>
  );
};

const mapDispatchToProps = {
  getFavorites,
  getPlaces,
};

export default connect(null, mapDispatchToProps)(Filters);
