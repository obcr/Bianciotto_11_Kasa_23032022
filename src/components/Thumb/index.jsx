import React from 'react';

const Thumb = ({dataAppartement}) => {
console.log(dataAppartement);

     return (
         <li className='thumb'>
             <img src={dataAppartement.cover} alt={"nom " + dataAppartement.name}/>
             <h1>{dataAppartement.title}</h1>
         </li>

     );
    
};

export default Thumb;