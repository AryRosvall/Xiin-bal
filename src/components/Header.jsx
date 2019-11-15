import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/header.scss';
/* import logo from '../assets/static/user-icon.png'; */
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions/index';

const Header = (props) => {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  /* <img className='header__img' src='' alt='Xíinbal' /> */
  return (
    <header className='header'>
      <Link to='/'>
        Xíinbal
      </Link>
      <div className='header__search'>
        <div className='header__search--input'>
          <input type='text' className='input' placeholder='Buscar...' />
        </div>
        <div className='header__search--btnContainer'>
          <button className='header__search--btn'>Buscar</button>
        </div>
      </div>
      <section className='header__search--categories'>
        <button className='header__search--categories_btn'>Favoritos</button>
        <button className='header__search--categories_btn'>Tendencias</button>
        <button className='header__search--categories_btn'>Comida</button>
        <button className='header__search--categories_btn'>Café</button>
        <button className='header__search--categories_btn'>Nocturna</button>
        <button className='header__search--categories_btn'>Diversión</button>
        <button className='header__search--categories_btn'>Compras</button>
      </section>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <li><a href='/'>{user.name}</a></li> :
              null
          }
          {
            hasUser ? (
              <li>
                <Link to='#Logout' onClick={handleLogout}>
                                        Cerrar Sesión
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/login'>
                                        Iniciar Sesión
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
