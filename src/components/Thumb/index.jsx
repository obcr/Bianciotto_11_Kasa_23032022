import React from 'react';

const Thumb = ({dataAppartement}) => {
// console.log(dataAppartement);

     return (
         <li className='thumb'>
             <img src={dataAppartement.cover} alt={"nom " + dataAppartement.name}/>
             <h1>{dataAppartement.title}</h1>
         </li>

     );
    
};

// const Thumb = (props) => {
//     console.log(props.dataAppartement);
    
//          return (
//              <li className='thumb'>
//                  <img src={props.dataAppartement.cover} alt={"nom " + props.dataAppartement.name}/>
//                  <h1>{props.dataAppartement.title}</h1>
//              </li>
    
//          );
        
//     };

export default Thumb;