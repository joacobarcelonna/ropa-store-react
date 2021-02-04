import React from 'react';
import ShopMen from '../../assets/hombreshop.jpg'
import ShopWoman from '../../assets/mujershop.jpg'
import './styles.scss';


const Directory = props => {
    return(
        <div className="directory">
            <div className='wrap'>
        <div 
            className="item" 
             style={{
                backgroundImage: `url(${ShopWoman})`
            }} > 
            
            <a> 
                Comprar Mujer
            </a>

            </div>

            <div 
            className="item" 
             style={{
                backgroundImage: `url(${ShopMen})`
            }} > 
             
             <a> 
                Comprar Hombre 
            </a>
            
            </div>
            </div>
        </div>
    )
}
export default Directory;