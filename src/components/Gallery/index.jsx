import React, { useEffect, useState } from "react";
import axios from "axios";
import Thumb from "../Thumb";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Gallery = () => {
const [data, setData] = useState([]);

useEffect(() => {
axios.get('./flat.json').then((res) => {
setData(res.data)});
},[])

// if(data.idkey !== setData) {
//   return <Navigate to='/*' />
// }

    return (
        <div className='gallery'>
            <ul>
                        {data
                        .map((dataAppartement, idKey) => {
                            const path = '/Accommodation/' + dataAppartement.id
//                             if(path !== '/Accommodation/' + dataAppartement.id) {
//   return <Navigate to='/*' />
// }
                        return (
                            
                            <Link to={path} key={idKey}><Thumb key={idKey} dataAppartement={dataAppartement}/></Link>

            )})}
            </ul>
        </div>
    );
};

export default Gallery;


