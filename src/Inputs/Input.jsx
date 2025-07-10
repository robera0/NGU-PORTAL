import React, { useState } from 'react';
import styled from 'styled-components';

const Input = () => {
  const [value, setValue] = useState('');

  return (
    <StyledWrapper>
      <div className={`form-control ${value ? 'has-value' : ''}`}>
        <input
          type="text"
          name="studentName"
          id="studentName"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label>
          {'Student Name'.split('').map((char, i) => (
            <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 220px;
  }

  .form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #AF89EA;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #000;
    outline: none;
    box-shadow: none;
    transition: border-color 0.3s ease;
  }

  .form-control input:focus {
    border-bottom-color: #552bcb;
  }

  .form-control.has-value label span,
  .form-control input:focus + label span {
    transform: translateY(-30px);
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: #552bcb;
    font-weight: 600;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

export default Input;
