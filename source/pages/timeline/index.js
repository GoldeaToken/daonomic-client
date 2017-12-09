import React, { Component } from 'react';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Balance from '~/components/balance';
import TokenPrice from '~/components/token-price';
import SaleTimeline from '~/components/sale-timeline';

export default class Timeline extends Component {
  render() {
    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <SaleTimeline />
        </TwoColumnsLayout.Left>

        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
