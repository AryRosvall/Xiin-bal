import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/places.scss';

const Places = (props) => {

  const { mainView, children } = props;

  return (
    <section className='places'>
      <h2 className='places__h2'>{mainView}</h2>
      {children}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    mainView: state.mainView,
  };
};

export default connect(mapStateToProps, null)(Places);
