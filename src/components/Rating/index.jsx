import React from 'react';
import star_full from '../../asset/img/star_full.png'
import star_empty from '../../asset/img/star_empty.png'

const Rating = ({rating}) => {
    const stars = []

    for (let i = 0; i < 5; i++) {
        if (i < rating) stars.push(<img src={star_full} alt="full-star" key={i} />)
        else stars.push( <img src={star_empty} alt="empty-star" key={i}/>)
        }

    return ( 
        <div className="rating">{stars}</div>
     );
};

export default Rating;
