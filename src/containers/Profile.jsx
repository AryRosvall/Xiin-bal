import React, {useState, useRef} from 'react';
import '../assets/styles/components/profile.scss';



const Profile = () => {

    const [isReadOnlyName, setIsReadOnlyName] = useState({
        isReadOnlyName:true,
    });

    const [isReadOnlyEmail, setIsReadOnlyEmail] = useState({
        isReadOnlyEmail:true,
    });

    const readOnlyName = useRef(null)
    const readOnlyEmail = useRef(null)
    
      function handleEditNameOnclick(){
        readOnlyName.current.focus();
        setIsReadOnlyName(false);
      }

      function handleEditEmailOnclick(){
        readOnlyEmail.current.focus();
        setIsReadOnlyEmail(false);
      }


    return (
    <section className="profile">
    <div className="profile__photo--frame">
        <img src="./src/assets/static/PROFILE.png" alt="" className="profile__photo"/> 
        <a href="#">Editar</a>
    </div>
    <div className="profile__data">
        <form action="">
            <h1>Mi Perfil</h1>
            <div className="profile__data--editContainer">
            <img className="profile__data--edit" src="./src/assets/static/edit.png" alt="" onClick={handleEditNameOnclick}/>
            </div>
            <input type="text" className="profileData input" ref ={readOnlyName} readOnly={isReadOnlyName} required name="profileName" id="profileName" placeholder="Nombre"/>
            <div className="profile__data--editContainer">
            <img className="profile__data--edit" src="./src/assets/static/edit.png" alt="" onClick={handleEditEmailOnclick}/>
            </div>
            <input type="email" className="profileData input" ref ={readOnlyEmail} readOnly={isReadOnlyEmail} required name="profileEmail" id="profileEmail" placeholder="Email"/>
            <button type="submit" className="header__search--btn">Cambiar</button>

            <h1>Cambiar Contraseña</h1>

            <input type="password" className="profilePassword input" name="profilePasswordOld" id="profilePasswordOld"
                placeholder="Contraseña actual"/>
            <input type="password" className="profilePassword input" name="profilePasswordNew" id="profilePasswordNew"
                placeholder="Contraseña nueva"/>
            <button type="submit" className="header__search--btn">Cambiar</button>

            <h1>Mis Favoritos</h1>
            <button type="" className="header__search--btn">Ver mis favoritos</button>
        </form>
    </div>
</section>
 
)};

export default Profile;