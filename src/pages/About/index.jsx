import React from 'react';
import Accordion from '../../components/Accordion';
import SectionTopAbout from '../../components/SectionTopAbout';

const About = () => {
    return (
        <div>
            <SectionTopAbout/>
            <div className="dropDownSectionAbout">
                <Accordion header="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." 
                defaultOpen={true} />
                <Accordion header="Respect" 
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
                defaultOpen={true} />
                <Accordion header="Service" 
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
                defaultOpen={true} />
                <Accordion header="Responsabilité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                defaultOpen={true} />
            </div>
        </div>
    );
};

export default About;