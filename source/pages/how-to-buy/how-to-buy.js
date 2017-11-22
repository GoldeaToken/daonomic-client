import React, { Component } from 'react';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Balance from '~/components/balance';
import TokenPrice from '~/components/token-price';
import Instruction from './components/instruction';

export default class HowToBuy extends Component {
  render() {
    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <Instruction />
        </TwoColumnsLayout.Left>

        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
