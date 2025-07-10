import React, { useState } from 'react';
import './Accordion.css'; 
import { TiArrowSortedDown } from "react-icons/ti";






export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={`accordion ${isOpen ? 'active' : ''}`} onClick={togglePanel}>
        <span className="acc-title">{title}</span>
        <TiArrowSortedDown  className={`accordion-icon ${isOpen ? 'rotate' : ''}`} />
      </button>
      <div className="panel" style={{ display: isOpen ? 'block' : 'none' }}>
        <span className="acc-text">{children}</span>
      </div>
    </>
  );
}
