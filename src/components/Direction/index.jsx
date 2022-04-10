import React from 'react';
import chevron_left_solid from '../../asset/img/chevron_left_solid.png'
import chevron_right_solid from '../../asset/img/chevron_right_solid.png'

const Direction = ({direction, goTo}) => {
    return ( 
    <button onClick={goTo} className={direction === 'next' ? 'slider-button next' : 'slider-button previous'}>
        <img src={direction === 'next' ? chevron_right_solid : chevron_left_solid }
        alt={direction === 'next' ? '&#60;' : '&#62;'}/>
    </button>
    );
}
 
export default Direction;