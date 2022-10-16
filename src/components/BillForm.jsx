import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Selector from './Selector';
import { TIP_OPTIONS } from '../Consts';

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
  const tipOptions = TIP_OPTIONS;

  return (
    <Form>
      <Input
        type="positiveDecimal"
        label="Bill"
        placeholder="0"
        icon="dollar"
        value={form.bill}
        onChange={(e) => changeFormValue('bill', e.target.value)}
      />
      <InputWrapper>
        <Selector
          label="Select Tip %"
          options={tipOptions}
          value={form.tip}
          onChange={(value) => changeFormValue('tip', value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="positiveInteger"
          label="Number of people"
          placeholder="0"
          icon="person"
          value={form.numberOfPerson}
          onChange={(e) => changeFormValue('numberOfPerson', e.target.value)}
        />
      </InputWrapper>
    </Form>
  );
}

export default BillForm;
