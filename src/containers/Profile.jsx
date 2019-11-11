import React from 'react';
import '../assets/styles/components/profile.scss';

const Profile = () => (
    <section class="profile">
    <div class="profile__photo--frame">
        <img src="./src/assets/static/PROFILE.png" alt="" class="profile__photo"/> 
        <a href="#">Editar</a>
    </div>
    <div class="profile__data">
        <form action="">
            <h1>Mi Perfil</h1>
            <input type="text" class="input" name="profileName" id="profileName" placeholder="Nombre"/>
            <img src="./src/assets/static/edit.png" alt="" />
            <input type="email" class="input" name="profileEmail" id="profileEmail" placeholder="Email"/>
            <img src="./src/assets/static/edit.png" alt="" />

            <h1>Cambiar Contraseña</h1>

            <input type="password" class="input" name="profilePassword" id="profilePassword"
                placeholder="Contraseña actual"/>
            <input type="password" class="input" name="profilePassword" id="profilePassword"
                placeholder="Contraseña nueva"/>
            <button type="submit" class="header__search--btn">Cambiar</button>

            <h1>Mis Favoritos</h1>
            <button type="" class="header__search--btn">Ver mis favoritos</button>
        </form>
    </div>
</section>
 
);

export default Profile;