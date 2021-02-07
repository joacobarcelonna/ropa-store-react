import React from 'react';
import ShopMen from '../../assets/hombreshop.jpg'
import ShopWomen from '../../assets/mujershop.jpg'
import './styles.scss';
import { Link } from 'react-router-dom';

const Directory = props => {
    return (
      <div className="directory">
        <div className="wrap">
          <div
            className="item"
            style={{
              backgroundImage: `url(${ShopWomen})`
            }}
          >
            <Link to="/search/womens">
              Ropa para Mujeres
            </Link>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${ShopMen})`
            }}
          >
            <Link to="/search/mens">
              Ropa para Hombres
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Directory;