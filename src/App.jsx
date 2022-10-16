import logo from './logo.svg';
import styled from 'styled-components';
import Big from 'big.js';

import BillRow from './components/BillRow';
import Button from './components/Button';
import Input from './components/Input';
import Selector from './components/Selector';
import { useEffect, useState } from 'react';

const AppContainer = styled.div`
  width: min(100% - 15px, 916px);
  margin-inline: auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 158px 0 80px;

  @media (max-width: 767px) {
    padding: 46px 0 36px;
  }
`;

const Logo = styled.img`
  width: 96px;
  height: 64px;
`;

const MainIsland = styled.main`
  background-color: var(--white);
  border-radius: 18px;
  padding: 32px;
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
    border-radius: 18px 18px 0 0;
    height: max(calc(100vh - 210px), 760px);
  }
`;

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

const InputWrapper = styled.section`
  margin-top: 42px;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

function App() {
  const [form, setForm] = useState({
    bill: '',
    tip: '5',
    numberOfPerson: '',
  });

  const [personalBill, setPersonalBill] = useState({
    tipAmount: '0.00',
    total: '0.00',
  });

  const tipOptions = [
    { label: '5%', value: '5' },
    { label: '10%', value: '10' },
    { label: '15%', value: '15' },
    { label: '25%', value: '25' },
    { label: '50%', value: '50' },
  ];

  useEffect(() => {
    const { bill, tip, numberOfPerson } = form;

    console.log(form);

    if (bill && tip && numberOfPerson) {
      const billBig = new Big(bill);
      const tipsBig = billBig.mul(new Big(tip).div(100));
      const billWithTipsBig = billBig.plus(tipsBig);

      setPersonalBill({
        tipAmount: tipsBig.div(numberOfPerson).toFixed(2),
        total: billWithTipsBig.div(numberOfPerson).toFixed(2),
      });
    }
  }, [form]);

  const handleFormEvent = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="SPLITTER" />
      </Header>
      <MainIsland>
        <Form>
          <Input
            type="positiveDecimal"
            label="Bill"
            placeholder="0"
            icon="dollar"
            value={form.bill}
            onChange={(e) => handleFormEvent('bill', e.target.value)}
          />
          <InputWrapper>
            <Selector
              label="Select Tip %"
              options={tipOptions}
              value={form.tip}
              onChange={(value) => handleFormEvent('tip', value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="positiveInteger"
              label="Number of people"
              placeholder="0"
              icon="person"
              value={form.numberOfPerson}
              onChange={(e) =>
                handleFormEvent('numberOfPerson', e.target.value)
              }
            />
          </InputWrapper>
        </Form>
        <BillIsland>
          <BillRow
            label="Tip amount"
            subLabel="person"
            bill={personalBill.tipAmount}
          />
          <BillRow label="Total" subLabel="person" bill={personalBill.total} />
          <Button>RESET</Button>
        </BillIsland>
      </MainIsland>
    </AppContainer>
  );
}

export default App;
