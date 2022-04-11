import React, { useState } from "react";
import chevron_up_solid from '../../asset/img/chevron_up_solid.png'


const Accordion = ({ content, header, defaultOpen }) => {

  const [isOpen, setState] = useState(defaultOpen)

  let displayedContent
  (typeof content === 'string') ? displayedContent = [content] : displayedContent = content
  
  return ( 
      <div className="dropDownSection">
          <div className="dropDownSectionHeader" onClick={() => setState(!isOpen)}>
              <span className="dropDownSectionTitle">{header}</span>
              <img src={chevron_up_solid} alt="arrow" className="accordion-arrow" onClick={() => setState(!isOpen)}/>
          </div>
          <div className={isOpen ? 'dropDownSectionContent' : 'dropDownSectionContent__hidden'}>
          {
              displayedContent.map(item => {
                  return (
                      <span key={item+"_key"}>
                          {item}
                          <br />
                      </span>
                  )
                  })
          }
          </div>
      </div>
   );
}

export default Accordion;












