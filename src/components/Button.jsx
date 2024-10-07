import React from 'react';
import './button.css';

export default function Button({ size = 'high', disabled = false }) {
  return (
    <button 
      type="button" 
      className={`button ${size}`} 
      disabled={disabled}
    >
      Click Me ❯
    </button>
  );
}









