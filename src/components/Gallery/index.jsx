import React, { useEffect, useState } from "react";
import axios from "axios";
import Thumb from "../Thumb";
import { Link } from "react-router-dom";

const Gallery = () => {
const [data, setData] = useState([]);

useEffect(() => {
axios.get('./flat.json').then((res) => {
setData(res.data)});
},[])

    return (
        <div className='gallery'>
            <ul>
                        {data
                        .map((dataAppartement, idKey) => {
                            const path = '/Accommodation/' + dataAppartement.id

                        return (
                            
                            <Link to={path} key={idKey}><Thumb key={idKey} dataAppartement={dataAppartement}/></Link>

            )})}
            </ul>
        </div>
    );
};

export default Gallery;


