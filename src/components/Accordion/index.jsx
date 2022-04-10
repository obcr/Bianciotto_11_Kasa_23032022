import React, { useState } from "react";
import chevron_up_solid from '../../asset/img/chevron_up_solid.png'


const Accordion = ({ content, header, defaultOpen }) => {

  const [isOpen, setState] = useState(defaultOpen)

  let displayedContent
  (typeof content === 'string') ? displayedContent = [content] : displayedContent = content
  
  return ( 
      <div className="accordion">
          <div className="accordion-header" onClick={() => setState(!isOpen)}>
              <span className="accordion-title">{header}</span>
              <img src={chevron_up_solid} alt="arrow" className="accordion-arrow" onClick={() => setState(!isOpen)}/>
          </div>
          <div className={isOpen ? 'accordion-content' : 'accordion-content__hidden'}>
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












