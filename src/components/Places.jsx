import React from 'react';
import '../assets/styles/components/places.scss';

const Places = ({ children }) => {

    return (
        <section className="places">
            <h1>Más de 100 lugares</h1>
            {children}
        </section>
    );
};

export default Places;
