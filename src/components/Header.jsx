import React from 'react';
import '../assets/styles/components/header.scss';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {

    return ( 
        <header className="header">
            <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Xíinbal"/>
            <div className="header__search">
                <div className="header__search--input">
                    <input type="text" className="input" placeholder="Buscar..."/>
                </div>
                <div className="header__search--btnContainer">
                    <button className="header__search--btn">Buscar</button>
                </div>
            </div>
            <section className="header__search--categories">
                    <button className="header__search--categories_btn">Favoritos</button>
                    <button className="header__search--categories_btn">Tendencias</button>
                    <button className="header__search--categories_btn">Comida</button>
                    <button className="header__search--categories_btn">Café</button>
                    <button className="header__search--categories_btn">Nocturna</button>
                    <button className="header__search--categories_btn">Diversión</button>
                    <button className="header__search--categories_btn">Compras</button>
            </section>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt=""/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header> 
    );
}; 

export default Header; 
