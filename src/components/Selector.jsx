import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 57.5px;
  grid-gap: 14px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SelectorButton = styled.button`
  background-color: ${({ active }) =>
    active ? 'var(--strong-cyan)' : 'var(--very-dark-cyan)'};
  color: var(--very-light-grayish-cyan);
  padding: 12px;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: hsl(185, 41%, 84%);
    color: var(--very-dark-cyan);
  }

  &:disabled {
    background-color: hsl(184, 14%, 56%);
    opacity: 0.5;
  }
`;

const SelectorLabel = styled.label`
  color: var(--dark-grayish-cyan);
  font-size: 14px;
  margin-bottom: 8px;
`;

function Selector({ label, value: currentValue, options, onChange }) {
  const [customInput, setCustomInput] = useState('');

  const handleOptionClick = (event, value) => {
    event.preventDefault();
    event.stopPropagation();
    onChange(value);
  };

  const handleCustomInputClick = () => {
    onChange(customInput ? customInput : options[0].value);
  };

  useEffect(() => {
    onChange(customInput ? customInput : options[0].value);
  }, [customInput]);

  return (
    <SelectorContainer>
      <SelectorLabel>{label}</SelectorLabel>
      <OptionsContainer>
        {options.map(({ label, value }) => (
          <SelectorButton
            key={value}
            active={value === currentValue}
            onClick={(e) => handleOptionClick(e, value)}
          >
            {label}
          </SelectorButton>
        ))}
        <Input
          type="number"
          placeholder="Custom"
          value={customInput}
          active={customInput === currentValue}
          onChange={(e) => setCustomInput(e.target.value)}
          onClick={handleCustomInputClick}
        />
      </OptionsContainer>
    </SelectorContainer>
  );
}

export default Selector;
