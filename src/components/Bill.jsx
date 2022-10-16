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

function Bill({ personalBill, onHandleReset }) {
  return (
    <BillIsland>
      <BillRow
        label="Tip amount"
        subLabel="person"
        bill={personalBill.tipAmount}
      />
      <BillRow label="Total" subLabel="person" bill={personalBill.total} />
      <Button onClick={onHandleReset}>RESET</Button>
    </BillIsland>
  );
}

export default Bill;
