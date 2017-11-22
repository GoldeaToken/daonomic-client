import React, { Component } from 'react';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Balance from '~/components/balance';
import TokenPrice from '~/components/token-price';
import News from './components/news';

export default class Dashboard extends Component {
  render() {
    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <News />
        </TwoColumnsLayout.Left>

        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
