import React, { Component } from 'react';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Balance from '~/components/balance';
import TokenPrice from '~/components/token-price';
import News from './components/news';

export default class Telegram extends Component {
  render() {
    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <iframe src="https://tgwidget.com/widget/?id=5a2d579883ba8868368b4567" frameborder="0" scrolling="no" horizontalscrolling="no" verticalscrolling="no" width="100%" height="800px" async></iframe>
        </TwoColumnsLayout.Left>

        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
