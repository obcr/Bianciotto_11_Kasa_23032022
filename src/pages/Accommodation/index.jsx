import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from '../../components/Slider';
import Accordion from '../../components/Accordion';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';


const Accommodation = () => {
    const { id } = useParams();

const [dataAccommodation, setDataAccommodation] = useState("");

useEffect(() => {
    axios.get('../flat.json').then((res) => {console.log('Data Egale', res.data);
    console.log('Data id', id)
    setDataAccommodation(res.data.find(dataAppartement => dataAppartement.id === id))
    console.log(res.data.find(dataAppartement => dataAppartement.id === id));
    console.log('Data Accommodation Egale quoi', dataAccommodation);
});
    },[id])

    return (
        <div className='bodyAccommodationId'>
        {dataAccommodation &&<div className='topSlider'><Slider pictures={dataAccommodation.pictures} alt={dataAccommodation.title}/></div>}
                <div className="infoSection">
                        <div className="infoSectionLocation">
                                <h1 className="infoSectionTitle">{dataAccommodation.title}</h1>
                                <span>{dataAccommodation.location}</span>
                        </div>
                            <div className="hostDetails">
                            {dataAccommodation &&
<span className="hostName">{dataAccommodation.host.name}</span>}
{dataAccommodation &&
<img src={dataAccommodation.host.picture} alt={dataAccommodation.host.name + "photo de profil"} className="hostPicture"/>}
                            </div>
                        
                            {dataAccommodation &&<div className="tagSection">
                            <Tags tags={dataAccommodation.tags}/>
                            <Rating rating={dataAccommodation.rating}/>
                        </div>}
                        {dataAccommodation &&<div className="dropDownSection">
                            <Accordion header="Description" content={dataAccommodation.description} defaultOpen={true}/>
                            <Accordion header="Équipements" content={dataAccommodation.equipments} defaultOpen={true}/>
                        </div>}
                </div>
    
</div>
    

    );
};

export default Accommodation;










