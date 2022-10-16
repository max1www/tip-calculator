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
  border: 2px solid
    ${({ active }) =>
      active ? 'var(--strong-cyan)' : 'var(--very-light-grayish-cyan)'};
  border-radius: 4px;
  outline: 0;
  padding: 9px;
  color: hsl(183, 100%, 15%);
  text-align: right;
  font-size: 24px;

  ${({ errorMessage }) => errorMessage && 'border: 2px solid var(--red);'}

  &:hover {
    border-color: var(--light-grayish-cyan);
  }

  &:focus {
    border-color: var(--strong-cyan);
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

const CHANGE_LOCKER = {
  positiveDecimal: (event, params) => {
    // TODO made regex for it
    const value = event.target.value;
    const numberValue = Number(value);
    const fractionalPart = value.split('.')[1];

    return (
      numberValue !== isNaN &&
      numberValue >= 0 &&
      (fractionalPart?.length ?? 0) <= (params?.precision ?? 2)
    );
  },
  positiveInteger: (event) => {
    // TODO made regex for it
    const value = event.target.value;
    const numberValue = Number(value);

    return numberValue !== isNaN && numberValue >= 0 && !value.includes('.');
  },
};

function Input(props) {
  const handleChangeInput = (event) => {
    if (
      !CHANGE_LOCKER[props.type] ||
      CHANGE_LOCKER[props.type](event, props.lockerParams)
    ) {
      props.onChange(event);
    }
  };

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
      <InputElement {...props} type="string" onChange={handleChangeInput} />
    </InputContainer>
  );
}

export default Input;
