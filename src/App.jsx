import logo from './logo.svg';
import styled from 'styled-components';
import Big from 'big.js';

import BillForm from './components/BillForm';
import BillRow from './components/BillRow';
import Button from './components/Button';
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

const DEFAULT_FORM_STATE = {
  bill: '',
  tip: '5',
  numberOfPerson: '',
};

const DEFAULT_PERSONAL_BILL = {
  tipAmount: '0.00',
  total: '0.00',
};

function App() {
  const [form, setForm] = useState(DEFAULT_FORM_STATE);
  const [personalBill, setPersonalBill] = useState(DEFAULT_PERSONAL_BILL);

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

  const handleChangeFormValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleReset = () => {
    setForm(DEFAULT_FORM_STATE);
    setPersonalBill(DEFAULT_PERSONAL_BILL);
  };

  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="SPLITTER" />
      </Header>
      <MainIsland>
        <BillForm form={form} changeFormValue={handleChangeFormValue} />
        <BillIsland>
          <BillRow
            label="Tip amount"
            subLabel="person"
            bill={personalBill.tipAmount}
          />
          <BillRow label="Total" subLabel="person" bill={personalBill.total} />
          <Button onClick={handleReset}>RESET</Button>
        </BillIsland>
      </MainIsland>
    </AppContainer>
  );
}

export default App;
