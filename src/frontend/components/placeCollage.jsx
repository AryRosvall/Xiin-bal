import React from 'react';
import '../assets/styles/components/placeCollage.scss';
import tacoExample from '../assets/static/google_place_photo.jpeg';

const PlaceCollage = ({ props }) => {
  return (
    <section className='place__collage'>
      <div className='place__collage--big'>
        <img src={tacoExample} alt='' className='placeDetail--img' />
      </div>
      <div className='place__collage--medium'>
        <img src={tacoExample} alt='' className='' />
      </div>
      <div className='place__collage--medium'>
        <img src={tacoExample} alt='' className='placeDetail--img' />
      </div>
      <div className='place__collage--medium'>
        <img src={tacoExample} alt='' className='placeDetail--img' />
      </div>
      <div className='place__collage--medium'>
        <img src={tacoExample} alt='' className='placeDetail--img' />
      </div>
    </section>
  );
};

export default PlaceCollage;
