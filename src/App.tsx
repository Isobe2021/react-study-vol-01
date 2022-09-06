import { FC, useState } from "react";
import { FormProduct } from "./components/molecules/FormProduct";
import styled from 'styled-components';
import { SingleColumn } from "components/layout/SingleColumn";

const InputWrapper = styled.div`
  margin-bottom: 16px;

  > .label {
    display: inline-flex;
    align-items: center;

    > .text {
      margin-right: 8px;
    }

    > .input {
      padding: 8px 16px;
    }
  }
`;

export const App: FC = () => {
  const [price, setPrice] = useState(10000);
  const [count, setCount] = useState(10);
  const [quantity, setQuantity] = useState(10);
  const [url, setUrl] = useState('');

  return (<>
    <SingleColumn>
      <>
        <InputWrapper>
          <label className="label">
            <span className="text">お礼の品の金額</span>
            <input className="input" type="number" value={price} onChange={(event) => {
              setPrice(Number(event.currentTarget.value));
            }} />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label className="label">
            <span className="text">お礼の品の在庫</span>
            <input className="input" type="number" value={count} onChange={(event) => {
              setCount(Number(event.currentTarget.value));
            }} />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label className="label">
            <span className="text">通常購入のURL</span>
            <input className="input" type="url" value={url} onChange={(event) => {
              setUrl(String(event.currentTarget.value));
            }} />
          </label>
        </InputWrapper>
        <InputWrapper>
          <label className="label">
            <span className="text">数量</span>
            <input className="input" type="number" value={quantity} onChange={(event) => {
              setQuantity(Number(event.currentTarget.value));
            }} />
          </label>
        </InputWrapper>
        <FormProduct price={price} count={count} url={url} quantity={quantity} />
      </>
    </SingleColumn>
  </>)
};
