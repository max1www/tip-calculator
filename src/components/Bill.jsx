import React from 'react';
import styled from 'styled-components';
import BillRow from './BillRow';
import { DEFAULT_PERSONAL_BILL, SCREEN_SIZE } from '../Consts';

const BillIsland = styled.section`
  background-color: var(--very-dark-cyan);
  border-radius: 12px;
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  @media (max-width: ${SCREEN_SIZE.MD}px) {
    margin: 30px 0 0;
    flex: none;
  }
`;

const ResetButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;

  @media (max-width: ${SCREEN_SIZE.MD}px) {
    margin-top: 15px;
  }
`;

const ResetButton = styled.button`
  background-color: var(--strong-cyan);
  color: var(--very-dark-cyan);
  padding: 12px;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: hsl(185, 41%, 84%);
  }

  &:disabled {
    background-color: hsl(184, 14%, 56%);
    opacity: 0.5;
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
        <ResetButton
          onClick={onHandleReset}
          disabled={
            personalBill.tipAmount === DEFAULT_PERSONAL_BILL.tipAmount &&
            personalBill.total === DEFAULT_PERSONAL_BILL.total
          }
        >
          RESET
        </ResetButton>
      </ResetButtonWrapper>
    </BillIsland>
  );
}

export default Bill;
