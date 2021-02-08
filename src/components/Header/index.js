import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './styles.scss'
import { Link } from 'react-router-dom'
import { signOutUserStart } from './../../redux/User/user.actions'

import Logo from './../../assets/logo2.png';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });
  
  const Header = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
  
    const signOut = () => {
      dispatch(signOutUserStart());
    };
  
    return (
      <header className="header">
        <div className="wrap">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Osmo Logo" />
            </Link>
          </div>
          
          <nav>
          <ul>
            <li>
              <Link to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/buscar">
                Buscar
              </Link>
            </li>
          </ul>
        
        
        </nav>
          <div className="callToActions">
  
            {currentUser && (
              <ul>
                <li>
                  <Link to="/dashboard">
                    Mi Cuenta
                  </Link>
                </li>
                <li>
                  <span onClick={() => signOut()}>
                    Cerrar Sesion
                  </span>
                </li>
              </ul>
            )}
  
            {!currentUser && (
              <ul>
                <li>
                  <Link to="/registrarse">
                    Registrarse
                </Link>
                </li>
                <li>
                  <Link to="/login">
                    Ingresar
                </Link>
                </li>
              </ul>
            )}
  
          </div>
        </div>
      </header>
    );
  };
  
  Header.defaultProps = {
    currentUser: null
  };
  
  export default Header;

