
import React, { useState, useEffect } from 'react';
import './CatCompanion.css';

const CatCompanion = () => {
  const [position, setPosition] = useState({ bottom: '20px', right: '20px' });
  const [interaction, setInteraction] = useState('idle'); // idle, meow, sleep

  const handleMouseEnter = () => {
    setInteraction('meow');
  };

  const handleMouseLeave = () => {
    setInteraction('idle');
  };

  // Simple pure CSS cat
  return (
    <div 
      className={`cat-companion ${interaction}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title="Meow! I'm your coding companion."
    >
      <div className="cat-body">
        <div className="cat-head">
          <div className="cat-ears left"></div>
          <div className="cat-ears right"></div>
          <div className="cat-eyes left"></div>
          <div className="cat-eyes right"></div>
          <div className="cat-mouth"></div>
        </div>
        <div className="cat-tail"></div>
      </div>
      {interaction === 'meow' && (
        <div className="chat-bubble">Meow! 😺</div>
      )}
    </div>
  );
};

export default CatCompanion;
