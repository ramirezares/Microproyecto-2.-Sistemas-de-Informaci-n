import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopUp.style.css';

const PopUp = ({ text }) => {
  const navigate = useNavigate();

  return (
    <div className="popup">
      <div className="popup-content">
        <p>{text}</p>
        <button onClick={() => navigate(0)}>Aceptar</button>
      </div>
    </div>
  );
};

export default PopUp;