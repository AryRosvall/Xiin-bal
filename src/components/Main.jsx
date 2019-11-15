import React from 'react';
import '../assets/styles/components/main.scss';

const Main = ({ children }) => {

  return (
    <section className='main'>
      {children}
    </section>
  );
};

export default Main;
