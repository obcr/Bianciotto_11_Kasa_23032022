import React from 'react';
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from '../../components/Accordion';

const Accommodation = ({dataAppartement}) => {
    const { id } = useParams();
console.log('id du logement', id);
console.log('title', dataAppartement);

    return (
        <div>
            <NavLink to="/Accommodation">Accommodation</NavLink>

            <h1>TEST</h1>
            <Header/>
            <Accordion/>
      <Footer />
        </div>
    );
};

export default Accommodation;

