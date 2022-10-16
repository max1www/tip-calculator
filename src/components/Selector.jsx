import React from 'react';
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
  background-color: var(--very-dark-cyan);
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

function Selector({ label, options }) {
  const handleOptionClick = (event, value) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <SelectorContainer>
      <SelectorLabel>{label}</SelectorLabel>
      <OptionsContainer>
        {options.map(({ label, value }) => (
          <SelectorButton
            key={value}
            onClick={(e) => handleOptionClick(e, value)}
          >
            {label}
          </SelectorButton>
        ))}
        <Input placeholder="Custom" />
      </OptionsContainer>
    </SelectorContainer>
  );
}

export default Selector;
