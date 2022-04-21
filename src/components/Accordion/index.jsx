import React, { useState } from "react";
import { FaChevronDown } from 'react-icons/fa'

const Accordion = ({ content, header, defaultClose }) => {

  const [isOpen, setState] = useState(defaultClose)
  const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0)'
  const rotation = { transform: rotate, transition: '0.6s ease-in-out' }

  let displayedContent
  (typeof content === 'string') ? displayedContent = [content] : displayedContent = content
  
  return ( 
      <div className="dropDown">
          <div className="dropDownHeader" onClick={() => setState(!isOpen)}>
              <span className="dropDownTitle">{header}</span>
              <FaChevronDown style={rotation} alt="arrow" className="FaChevronDown-arrow" onClick={() => setState(!isOpen)}/>
          </div>
          <div className={isOpen ? 'dropDownContent' : 'dropDownContent__hidden'}>
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












