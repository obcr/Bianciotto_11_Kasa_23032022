import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Direction = ({direction, goTo}) => {
    return ( 
    <button onClick={goTo} className={direction === 'next' ? 'slider-button next' : 'slider-button previous'}>
        {direction === 'next' ? <FaChevronRight className='FaChevronRightLeft'/> : <FaChevronLeft className='FaChevronRightLeft'/>}     
        <span alt={direction === 'next' ? '&#60;' : '&#62;'} />
    </button>
    );
}
 
export default Direction;