import React, { useState, useRef } from 'react';
import ArrowIcon from '../../assets/Vector.png';
import dataCollapse from '../../assets/dataCollapse.js';

function Collapse({ title, description, equipments, text, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Ref to measure content height

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <h2 className="collapse-header" onClick={toggleCollapse}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <img
            src={ArrowIcon}
            alt="Arrow icon"
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`}
          />
        </span>
      </h2>
      <div
        className="collapse-content-wrapper"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div
          className="collapse-content open"
          ref={contentRef} // Attach the ref here
        >
          {/* Dynamically render content based on provided props */}
          {type === 'description' && <p>{description}</p>}
          {type === 'equipments' && (
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
          {text && <p>{text}</p>} {/* For CollapseAbout-style content */}
        </div>
      </div>
    </div>
  );
}

function MenuCollapsed() {
  return (
    <div className="about-Values">
      {dataCollapse.map((item, index) => (
        <Collapse key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export { Collapse, MenuCollapsed };
