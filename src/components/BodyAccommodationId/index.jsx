import React from 'react';
import { useParams } from 'react-router-dom';
import DropDownSmall from '../DropDownSmall';
import DropDownLarge from '../DropDownLarge';
import Tag from '../Tag';


const BodyAccommodationId = () => {
    const { id } = useParams();
    console.log('id du logement', id);

    return (
        <div className='bodyAccommodationId'>
            <DropDownSmall/>
            <DropDownLarge/>
            <Tag/>
        </div>
    );
};

export default BodyAccommodationId;