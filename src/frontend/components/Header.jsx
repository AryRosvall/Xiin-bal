import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/header.scss';
/* import logo from '../assets/static/user-icon.png'; */
import userIcon from '../assets/static/user-icon.png';
import searchIcon from '../assets/static/search.png';
import { logoutRequest, searchPlace } from '../actions/index';

const Header = (props) => {

  const { user } = props;

  const [searchQuery, setsearchQuery] = useState('');

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  const handleSearch = (searchQuery) => {
    props.searchPlace(searchQuery);
  };

  return (
    <header className='header'>
      <Link to='/'>
        <span className='header__logo'>Xíinbal</span>
      </Link>
      <div className='header__search'>
        <div className='header__search--input'>
          <input type='text' className='input' placeholder='Buscar...' onInput={e => setsearchQuery(e.target.value)} />
        </div>
        <div className='header__search--btnContainer'>
          <img className='header__search--btnIcon' src={searchIcon} alt='' onClick={() => { handleSearch(searchQuery); }} />
        </div>
      </div>
      {/*   <section className='header__search--categories'>
        <button type='button' className='header__search--categories_btn'>Favoritos</button>
        <button type='button' className='header__search--categories_btn'>Tendencias</button>
        <button type='button' className='header__search--categories_btn'>Comida</button>
        <button type='button' className='header__search--categories_btn'>Café</button>
        <button type='button' className='header__search--categories_btn'>Nocturna</button>
        <button type='button' className='header__search--categories_btn'>Diversión</button>
        <button type='button' className='header__search--categories_btn'>Compras</button>
      </section> */}
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
            hasUser ? (
              <li>
                <Link to='/profile'>
                  {user.name}
                </Link>
              </li>
            ) :
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
  searchPlace,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
