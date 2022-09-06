import { FC } from 'react';
import styled from 'styled-components';
import { Box } from 'components/atoms/Box';
import { DefinitionList } from 'components/atoms/DefinitionList';
import { InputSelect } from 'components/atoms/InputSelect';
import { Button } from 'components/atoms/Button';

type Props = {
  price: number;
  count: number;
  url: string;
  quantity: number;
};

export const FormProduct: FC<Props> = ({ price, count, url, quantity }) => {

  const STOCK_THRESHOLD_UPPER = 6;
  const STOCK_THRESHOLD_LOWER = 0;
  const QUANTITY_THRESHOLD = 10;

  const switchStockStatus = (count: number) => {
    if (count >= STOCK_THRESHOLD_UPPER) {
      return count;
    } else if (count > STOCK_THRESHOLD_LOWER && count < STOCK_THRESHOLD_UPPER) {
      return "残りわずか。寄付はお早めに";
    } else {
      return "品切れ";
    }
  }

  const getOptionsFromQuantity = (quantity: number) => {
    if (quantity > QUANTITY_THRESHOLD) {
      quantity = QUANTITY_THRESHOLD;
    }
    return [...Array(quantity)].map((_, i) => { 
      return {
        value: i + 1,
        label: String(i + 1)
      } 
    });
  }

  return <>
    <Box width="500px">
      <>
        <WrapDefinitionList>
          <DefinitionList items={[
            {
              term: "寄付額",
              description: <Price>
                <span className="price">{ price.toLocaleString() }円</span>
                <span className="note">送料無料</span>
              </Price>,
              note: "何回お礼の品をもらっても実質年間2,000円の負担"
            },
            {
              term: "在庫",
              description: <>
                { switchStockStatus(count) }
              </>
            },
            {
              term: "数量",
              description: <InputSelect options={ getOptionsFromQuantity(quantity) }>
              </InputSelect>
            },
          ]}></DefinitionList>
          <LayoutButton>
            <Button width="250px">ふるさと納税でもらう</Button>
          </LayoutButton>
        </WrapDefinitionList>
      </>
    </Box>
  </>;
};

const WrapDefinitionList = styled.div`
  position: relative;
`;

const LayoutButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 176px;
`;
const Price = styled.div`
  > .price {
    font-size: 24px;
    font-weight: bold;
  }
  > .note {
    margin-left: 8px;
    font-size: 12px;
    font-weight: bold;
  }
`;