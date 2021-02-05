import React from 'react';
import './styles.scss'
import Logo from './../../assets/logo2.png';
import {Link} from 'react-router-dom'
import { auth } from './../../firebase/utils'

const Header = props => {
   
    const { currentUser } =props;

    return (
        <header className ="header">
            <div className ="wrap">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="SimpleLogo" />    
                    </Link>
                </div>    
                    
                 <div className ="callToActions">
                   
                    {currentUser && (
                        <ul>
                            <li>
                                <span>Cerrar Sesion</span>
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
                                    Iniciar Sesion
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
    currentUser: null,
}
export default Header;