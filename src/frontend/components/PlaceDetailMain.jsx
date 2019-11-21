import React from 'react';
import '../assets/styles/components/placeDetailMain.scss';

const PlaceDetailMain = ({ children }) => {

  return (
    <section className='placeDetailMain'>
      {children}
    </section>
  );
};

export default PlaceDetailMain;
