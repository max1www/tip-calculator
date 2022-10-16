import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputElement = styled.input`
  ${({ icon }) =>
    icon &&
    `background: url(icons/icon-${icon}.svg) no-repeat scroll 15px 19px;`}
  background-color: var(--very-light-grayish-cyan);
  border: 2px solid var(--very-light-grayish-cyan);
  border-radius: 4px;
  outline: 0;
  padding: 9px;
  color: hsl(183, 100%, 15%);
  text-align: right;
  font-size: 24px;

  ${({ errorMessage }) => errorMessage && 'border: 2px solid var(--red);'}

  &:focus {
    border-color: var(--light-grayish-cyan);
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--dark-grayish-cyan);
  font-size: 14px;
`;

const Label = styled.label``;

const ErrorMessage = styled.span`
  color: var(--red);
`;

function Input(props) {
  return (
    <InputContainer>
      {(props.label || props.errorMessage) && (
        <LabelContainer>
          {props.label && <Label>{props.label}</Label>}
          {props.errorMessage && (
            <ErrorMessage>{props.errorMessage}</ErrorMessage>
          )}
        </LabelContainer>
      )}
      <InputElement {...props} />
    </InputContainer>
  );
}

export default Input;
