import React from 'react';
import styled from 'styled-components';
import BillRow from './BillRow';
import Button from './Button';

const BillIsland = styled.section`
  background-color: var(--very-dark-cyan);
  border-radius: 12px;
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  @media (max-width: 767px) {
    margin: 30px 0 0;
    flex: none;
  }
`;

const ResetButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-top: 15px;
  }
`;

function Bill({ personalBill, onHandleReset }) {
  return (
    <BillIsland>
      <BillRow
        label="Tip amount"
        subLabel="person"
        bill={personalBill.tipAmount}
      />
      <BillRow label="Total" subLabel="person" bill={personalBill.total} />
      <ResetButtonWrapper>
        <Button onClick={onHandleReset}>RESET</Button>
      </ResetButtonWrapper>
    </BillIsland>
  );
}

export default Bill;
