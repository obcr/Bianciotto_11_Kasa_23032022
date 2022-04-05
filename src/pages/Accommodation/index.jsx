import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from '../../components/Slider';
import DropDownSmall from '../../components/DropDownSmall';
import Tag from '../../components/Tag';


const Accommodation = () => {
    const { id } = useParams();
// console.log('id du logement', id);

const [dataAccommodation, setDataAccommodation] = useState([]);

useEffect(() => {
    axios.get('../flat.json').then((res) => {console.log('Data Accommodation Egale', res.data)
    setDataAccommodation(res.data.find(dataAppartement => dataAppartement.id === id))});
    
    },[id])

console.log('Data Accommodation Egale Id', dataAccommodation);

    return (
        <div>


            <div className='bodyAccommodationId'>
            <div className='topSlider'><Slider pictures={dataAccommodation.pictures} alt={dataAccommodation.name}/></div>
            <div className='infoSection'></div>
            <div className='tagSection'><Tag/></div>
            <div className='startSection'></div>
            <div className='dropDownSection'><DropDownSmall/></div>
            </div>

        </div>
    );
};

export default Accommodation;







