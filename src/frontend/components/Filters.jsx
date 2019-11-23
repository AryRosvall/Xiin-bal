import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getFavorites, getPlaces } from '../actions';
import { getCookie } from '../utils/helpers';
import '../assets/styles/components/filters.scss';

const Filters = (props) => {

  const handleViewFavorites = () => {
    const userId = getCookie('id');
    const token = getCookie('token');
    props.getFavorites(userId, token);
    props.history.push('/');
  };

  const handleViewFilter = (filter) => {
    props.getPlaces(filter);
    props.history.push('/');
  };

  return (
    <section className='filters'>
      <button type='submit' className='filters__btn' onClick={() => handleViewFilter('Comida')}>Comida</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Café')}>Café</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Nocturna')}>Nocturna</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Diversión')}>Diversión</button>
      <button type='button' className='filters__btn' onClick={() => handleViewFilter('Compras')}>Compras</button>
      <button type='submit' className='filters__btn' onClick={handleViewFavorites}>Favoritos</button>
      <button type='submit' className='filters__btn' onClick={() => handleViewFilter('All')}>Todos</button>
    </section>
  );
};

const mapDispatchToProps = {
  getFavorites,
  getPlaces,
};

export default withRouter(connect(null, mapDispatchToProps)(Filters));
