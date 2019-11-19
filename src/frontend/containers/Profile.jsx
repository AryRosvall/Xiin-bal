import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import editIcon from '../assets/static/edit.png';
import profileIcon from '../assets/static/PROFILE.png';
import '../assets/styles/components/profile.scss';

const Profile = (props) => {

  const { user } = props;

  const [isReadOnlyName, setIsReadOnlyName] = useState({
    isReadOnlyName: true,
  });

  const [isReadOnlyEmail, setIsReadOnlyEmail] = useState({
    isReadOnlyEmail: true,
  });

  const readOnlyName = useRef(null);
  const readOnlyEmail = useRef(null);

  function handleEditNameOnclick() {
    readOnlyName.current.focus();
    setIsReadOnlyName(false);
  }

  function handleEditEmailOnclick() {
    readOnlyEmail.current.focus();
    setIsReadOnlyEmail(false);
  }

  return (
    <section className='profile'>
      <div className='profile__photo--frame'>
        <img src={profileIcon} alt='' className='profile__photo' />
        <a href='./'>Editar</a>
      </div>
      <div className='profile__data'>
        <form action=''>
          <h1>Mi Perfil</h1>
          <div className='profile__data--editContainer'>
            <img src={editIcon} className='profile__data--edit' alt='edit' onClick={handleEditNameOnclick} />
          </div>
          <input
            type='text'
            className='profileData input'
            ref={readOnlyName}
            readOnly={isReadOnlyName}
            required
            name='profileName'
            id='profileName'
            placeholder={`${user.name}`}
          />
          <div className='profile__data--editContainer'>
            <img src={editIcon} className='profile__data--edit' alt='edit' onClick={handleEditEmailOnclick} />
          </div>
          <input
            type='email'
            className='profileData input'
            ref={readOnlyEmail}
            readOnly={isReadOnlyEmail}
            required
            name='profileEmail'
            id='profileEmail'
            placeholder={`${user.email}`}
          />
          <button type='submit' className='header__search--btn'>Cambiar</button>
          <h1>Cambiar Contraseña</h1>
          <input
            type='password'
            className='profilePassword input'
            name='profilePasswordOld'
            id='profilePasswordOld'
            placeholder='Contraseña actual'
            required
          />
          <input
            type='password'
            className='profilePassword input'
            name='profilePasswordNew'
            id='profilePasswordNew'
            placeholder='Contraseña nueva'
            required
          />
          <button type='submit' className='header__search--btn'>Cambiar</button>
          <h1>Mis Favoritos</h1>
          <button type='button' className='header__search--btn'>Ver mis favoritos</button>
        </form>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
