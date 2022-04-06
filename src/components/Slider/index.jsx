import React from 'react';
import { useState } from 'react';
import chevron_left_solid from '../../asset/img/chevron_left_solid.png'
import chevron_right_solid from '../../asset/img/chevron_right_solid.png'

const Slider = ({pictures}) => {
    console.log("Test picture affichage", pictures);

    const [sliderAnimation, setSliderAnimation] = useState({
        index: 0,
        inProgress: false,
    })
console.log("sliderAnimation", sliderAnimation);


    return (
        <div className='slider'>
            {
                pictures.map((picture, index) => sliderAnimation.index === index && (
                    <div key={'slide'} className="sliderPicture">
                        <img src={picture} alt="" />
                    </div>
                ))
                }
            <img className='chevron_left_solid' src={chevron_left_solid} alt='chevron_left_solid' />
            <img className='chevron_right_solid' src={chevron_right_solid} alt='chevron_right_solid' />
        </div>
    );
};

export default Slider;


