import React from 'react';
import '../assets/styles/components/places.scss';

const Places = ({ children }) => {

  return (
    <section className='places'>
      {children}
    </section>
  );
};

export default Places;
