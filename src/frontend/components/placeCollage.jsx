import React from 'react';
import '../assets/styles/components/placeCollage.scss';

const PlaceCollage = (props) => {

  const { catalogImages } = props;

  return (
    <section className='place__collage'>
      <div className='place__collage--big'>
        <img src={catalogImages.image1} alt='' className='placeDetail--img' />
      </div>
      <div className='place__collage--medium'>
        <img src={catalogImages.image2} alt='' className='' />
      </div>
      <div className='place__collage--medium'>
        <img src={catalogImages.image3} alt='' className='placeDetail--img' />
      </div>
      <div className='place__collage--medium'>
        <img src={catalogImages.image4} alt='' className='placeDetail--img' />
      </div>
      <div className='place__collage--medium'>
        <img src={catalogImages.image5} alt='' className='placeDetail--img' />
      </div>
    </section>
  );
};

export default PlaceCollage;
