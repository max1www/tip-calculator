import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Selector from './Selector';
import { TIP_OPTIONS } from '../Consts';
import {
  POSITIVE_INTEGER_REGEX,
  POSITIVE_DECIMAL_REGEX,
  LESS_THAN_100,
} from '../utils/RegEx';
import { notZeroValidator } from '../utils/FormValidators';

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 24px;

  @media (max-width: 767px) {
    margin-right: 0;
    flex: none;
  }
`;

const InputWrapper = styled.section`
  margin-top: 42px;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

function BillForm({ form, changeFormValue }) {
  return (
    <Form>
      <Input
        label="Bill"
        placeholder="0"
        icon="dollar"
        regex={POSITIVE_DECIMAL_REGEX}
        value={form.bill}
        onChange={(e) => changeFormValue('bill', e.target.value)}
      />
      <InputWrapper>
        <Selector
          label="Select Tip %"
          options={TIP_OPTIONS}
          customInputRegex={LESS_THAN_100}
          value={form.tip}
          onChange={(value) => changeFormValue('tip', value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Number of people"
          placeholder="0"
          icon="person"
          regex={POSITIVE_INTEGER_REGEX}
          value={form.numberOfPerson}
          validators={[notZeroValidator]}
          onChange={(e) => changeFormValue('numberOfPerson', e.target.value)}
        />
      </InputWrapper>
    </Form>
  );
}

export default BillForm;
