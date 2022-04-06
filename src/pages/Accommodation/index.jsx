import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from '../../components/Slider';
import Accordion from '../../components/Accordion';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';


const Accommodation = () => {
    const { id } = useParams();
// console.log('id du logement', id);

const [dataAccommodation, setDataAccommodation] = useState([]);
const { pictures, title, location, tags, rating, description, equipments } = dataAccommodation

useEffect(() => {
    axios.get('../flat.json').then((res) => {console.log('Data Accommodation Egale', res.data)
    setDataAccommodation(res.data.find(dataAppartement => dataAppartement.id === id))});
    
    },[id])

console.log('Data Accommodation Egale Id', dataAccommodation);

    return (
<div className='bodyAccommodationId'>
    <div className='topSlider'><Slider pictures={pictures} alt={title}/></div>
            <div className="infoSection">
                    <div className="infoSectionLocation">
                            <h1 className="infoSectionTitle">{title}</h1>
                            <span>{location}</span>
                    </div>
                        {/* <div className="hostDetails">
                            <span className="hostName">{host.name}</span>
                            <img src={host.picture} alt={host.name + "photo de profil"} className="hostPicture"/>
                        </div>
                    </div> */}
                    <div className="tagSection">
                        <Tags tags={tags}/>
                        <Rating rating={rating}/>
                    </div>
                    <div className="dropDownSection">
                        <Accordion header="Description" content={description} defaultOpen={true}/>
                        <Accordion header="Équipements" content={equipments} defaultOpen={true}/>
                    </div>
            </div>

</div>
    );
};

export default Accommodation;







