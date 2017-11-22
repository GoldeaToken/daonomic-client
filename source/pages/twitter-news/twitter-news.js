import React, { Component } from 'react';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Balance from '~/components/balance';
import TokenPrice from '~/components/token-price';
import TwitterEmbed from './components/twitter-embed';

export default class twitterNews extends Component {
  render() {
    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <TwitterEmbed />
        </TwoColumnsLayout.Left>

        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
