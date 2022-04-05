import React, { useEffect, useState } from "react";
import axios from "axios";
import Thumb from "../Thumb";
import { Link } from "react-router-dom";

const Gallery = () => {
const [data, setData] = useState([]);
const [rangeValue, setRangeValue] = useState([6]);

useEffect(() => {
axios.get('./flat.json').then((res) => {
setData(res.data)});

},[])

// useEffect(() => {
//     axios.get('./flat.json').then((res) => {console.log('data egale', res.data)
//     setData(res.data)});
    
//     },[])

    return (
        <div className='gallery'>
            <div className="radioGallery">
                <input
                type="range"
                min="6"
                max="14"
                defaultValue={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)} 
                className="range-style"
                />
            </div>
            <ul>
                        {data
                        .slice(0, rangeValue)
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


