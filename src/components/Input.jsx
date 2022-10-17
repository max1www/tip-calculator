import React, { useState } from 'react';
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
  border: 2px solid
    ${({ active }) =>
      active ? 'var(--strong-cyan)' : 'var(--very-light-grayish-cyan)'};
  border-radius: 4px;
  outline: 0;
  padding: ${({ icon }) => (icon ? '9px 9px 9px 40px' : '9px')};
  color: hsl(183, 100%, 15%);
  text-align: right;
  font-size: 24px;

  &:hover {
    border-color: var(--light-grayish-cyan);
  }

  ${({ errorMessage }) =>
    errorMessage
      ? `border: 2px solid var(--red);`
      : '&:focus {border-color: var(--strong-cyan);}'}
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
`;

const Label = styled.label`
  color: var(--dark-grayish-cyan);
`;

const ErrorMessage = styled.span`
  color: var(--red);
`;

function Input(props) {
  const { regex, validators, errorMessage, label, onChange } = props;
  const [validatorError, setValidatorError] = useState(null);

  const handleChangeInput = (event) => {
    if (!regex || !event.target.value || regex.test(event.target.value)) {
      onChange(event);

      if (!validators) {
        return;
      }

      for (let validator of validators) {
        const errorMessage = validator(event.target.value);

        if (errorMessage) {
          setValidatorError(errorMessage);
          return;
        }
      }

      setValidatorError(null);
    }
  };

  return (
    <InputContainer>
      {(label || errorMessage || validatorError) && (
        <LabelContainer>
          {label && <Label>{label}</Label>}
          {(errorMessage || validatorError) && (
            <ErrorMessage>{errorMessage || validatorError}</ErrorMessage>
          )}
        </LabelContainer>
      )}
      <InputElement
        {...props}
        type="string"
        errorMessage={errorMessage ?? validatorError}
        onChange={handleChangeInput}
      />
    </InputContainer>
  );
}

export default Input;
