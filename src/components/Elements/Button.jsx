import React from "react";
import {HiArrowLongRight} from 'react-icons/hi2'

const Button = ({ className, children, style }) => (
  <button
    className={className}
    style={{
      border: "none",
      borderRadius: "5px",
      color: "#333",
      cursor: "pointer",
      fontSize: "12px",
      display: 'flex',
      gap: '5px',
      padding: '10px 10px',
      width: '130px',
      fontWeight: 600,
      ...style,
    }}
  >
    {children} <HiArrowLongRight color="#000" width={5}/>
  </button>
);

export default Button;
