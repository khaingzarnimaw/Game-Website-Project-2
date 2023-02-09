import React from 'react';
import {Link} from 'react-router-dom';


function KeItem(props) {
    return(
        <>
            <li className='Ke__item'>
                <Link className='Ke__item__link' to={props.path}>
                    <figure className='Ke__item__pic-wrap' data-category={props.label}>
                        <img
                         src={props.src} 
                         alt='Game Image'
                         className='Ke__item__img'/>
                    </figure>
                    {/* <div className='Ke__item__info'>
                        <h5 className='Ke__item__text'>{props.text}</h5>
                    </div> */}
                </Link>
            </li>

        </>
    );
}


export default KeItem;