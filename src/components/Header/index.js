import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo2.png';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Össom" />
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
              <Link to="/search">
                Catálogo
              </Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">

          <ul>

            <li>
              <Link>
                Carrito ({totalNumCartItems})
              </Link>
            </li>

            {currentUser && [
              <li>
                <Link to="/dashboard">
                  Mi cuenta
                </Link>
              </li>,
              <li>
                <span onClick={() => signOut()}>
                  Cerrar Sesion
                </span>
              </li>
            ]}

            {!currentUser && [
              <li>
                <Link to="/registration">
                  Registrarse
                </Link>
              </li>,
              <li>
                <Link to="/login">
                  Ingresar
                </Link>
              </li>
            ]}

          </ul>





        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;