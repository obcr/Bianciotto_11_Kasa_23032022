import React from 'react';
import SectionHeader from '../../asset/img/Background_Home.png'


const SectionTop = () => {
    return (
        <div className='sectionTop'>
            <img src={SectionHeader} alt='Background_Home' />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default SectionTop;

