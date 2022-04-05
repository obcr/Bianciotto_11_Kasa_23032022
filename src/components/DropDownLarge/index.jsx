import React, { useState } from "react";
import chevron_up_solid from '../../asset/img/chevron_up_solid.png'
import chevron_down_solid from '../../asset/img/chevron_down_solid.png'

const DropDownLarge = ({ dataAppartement }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="dropDownLarge-item">
      <div className="dropDownLarge-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>Équipements</h3><span>{isActive ? <img className='chevron_up_solid' src={chevron_up_solid} alt='chevron_up_solid' /> : <img className='chevron_down_solid' src={chevron_down_solid} alt='chevron_down_solid' />}</span>
      </div>
      {isActive && <div className="dropDownLarge-content">testdsjclsjdljsdlkjclksdjlkd</div>}
    </li>
  );
};

export default DropDownLarge;