import React from 'react';
import '../assets/styles/components/notfound.scss';

const NotFound = () => (

  <section className='notfound'>
    <div className='notfound__title'>
        404
    </div>
    <div className='notfound__subtitle'>
        Upsi! No lo pude encontrar, intenta de nuevo vaquero!
      <span aria-label='vaquero' role='img'>🤠</span>
    </div>
  </section>
);

export default NotFound;