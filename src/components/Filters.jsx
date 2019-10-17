import React from 'react';
import '../assets/styles/components/filters.scss';

const Filters = () => {
    return (
        <section className="filters">
            <button className="filters__btn">Precio</button>
            <button className="filters__btn">Abierto ahora</button>
            <button className="filters__btn">Especiales</button>
            <button className="filters__btn">No he estado</button>
            <button className="filters__btn">Guardado</button>
            <button className="filters__btn">Me gusta</button>
        </section>
    );
};

export default Filters; 