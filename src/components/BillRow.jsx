import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0 10px;
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.div`
  color: var(--white);
  font-size: 14px;
`;

const SubLabel = styled.span`
  color: var(--dark-grayish-cyan);
  font-size: 12px;
`;

const Price = styled.div`
  color: var(--strong-cyan);
  font-size: 38px;
  align-items: flex-end;
`;

function BillRow({ label, subLabel, bill }) {
  return (
    <Row>
      <Description>
        <Label>{label}</Label>
        <SubLabel>/ {subLabel}</SubLabel>
      </Description>
      <Price>${bill}</Price>
    </Row>
  );
}

export default BillRow;
