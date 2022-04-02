import React, { useState } from "react";
import chevron_up_solid from '../../asset/img/chevron_up_solid.png'
import chevron_down_solid from '../../asset/img/chevron_down_solid.png'


// import "./accordion.css";

const Accordion = ({ dataAppartement }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>Équipements</h3><span>{isActive ? <img className='chevron_up_solid' src={chevron_up_solid} alt='chevron_up_solid' /> : <img className='chevron_down_solid' src={chevron_down_solid} alt='chevron_down_solid' />}</span>
      </div>
      {isActive && <div className="accordion-content">{dataAppartement.title}</div>}
    </li>
  );
};

export default Accordion;