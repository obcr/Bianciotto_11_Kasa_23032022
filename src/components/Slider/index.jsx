import React from 'react';
import chevron_left_solid from '../../asset/img/chevron_left_solid.png'
import chevron_right_solid from '../../asset/img/chevron_right_solid.png'

const Slider = ({pictures}) => {
    console.log(pictures);

    return (
        <div className='slider'>
             {/* {pictures.map((picture) => (
        <img src={picture} alt="" />
      ))} */}

            <img className='chevron_left_solid' src={chevron_left_solid} alt='chevron_left_solid' />
            <img className='chevron_right_solid' src={chevron_right_solid} alt='chevron_right_solid' />
        </div>
    );
};

export default Slider;


