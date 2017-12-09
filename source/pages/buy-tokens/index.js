import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Balance from '~/components/balance';
import TokenPrice from '~/components/token-price';
import EthereumWallet from './components/ethereum-wallet';
import PaymentMethod from './components/payment-method';

@inject(({ walletAddress }) => ({
  isWalletSaved: walletAddress.isSaved,
}))
@observer
export default class BuyTokens extends Component {
  static propTypes = {
    isWalletSaved: PropTypes.bool.isRequired,
  };

  renderPaymentMethod = () => {
    const { isWalletSaved } = this.props;

    if (!isWalletSaved) {
      return null;
    }

    return (
      <PaymentMethod />
    );
  };

  render() {
    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <EthereumWallet />
          {this.renderPaymentMethod()}
        </TwoColumnsLayout.Left>

        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
