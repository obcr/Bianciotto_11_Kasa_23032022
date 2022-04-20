import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from '../../components/Slider';
import Accordion from '../../components/Accordion';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import { Navigate } from "react-router-dom";

const Accommodation = () => {
    const { id } = useParams();
    const [dataAccommodation, setDataAccommodation] = useState("");

useEffect(() => {
    axios.get('../flat.json').then((res) => {
    // console.log('Data Egale', res.data);
    // console.log('Data id', id);
    setDataAccommodation(res.data.find(dataAppartement => dataAppartement.id === id))
    // console.log(res.data.find(dataAppartement => dataAppartement.id === id));
    // console.log('Data Accommodation Egale quoi', dataAccommodation);
}); 
    },[dataAccommodation, id])

    if(dataAccommodation === undefined) {
        return <Navigate to='/*' />
      }

    return (
        <div className='bodyAccommodationId'>
        {dataAccommodation &&<div className='topSlider'><Slider pictures={dataAccommodation.pictures} alt={dataAccommodation.title}/></div>}
        {dataAccommodation &&<div className="infoSection">
            <div className="infoSectionLocationLeft">
                        <div className="infoSectionLocation">
                                <h1 className="infoSectionTitle">{dataAccommodation.title}</h1>
                                <span className="infoSectionSubTitle">{dataAccommodation.location}</span>
                        </div>
                    <Tags tags={dataAccommodation.tags}/>
            </div>
        
                            {dataAccommodation &&<div className="tagsRatingsSection">
                            <div className="hostDetails">
                            {dataAccommodation &&
<span className="hostName">{dataAccommodation.host.name}</span>}

<img src={dataAccommodation.host.picture} alt={dataAccommodation.host.name + "photo de profil"} className="hostPicture"/>
                            </div>
                            <Rating rating={dataAccommodation.rating}/>
                            </div>}
        </div>}

                        {dataAccommodation &&<div className="dropDownSection">
                            <Accordion header="Description" content={dataAccommodation.description} defaultOpen={true}/>
                            <Accordion header="Équipements" content={dataAccommodation.equipments} defaultOpen={true}/>
                        </div>}

        </div>
    );
};

export default Accommodation;










