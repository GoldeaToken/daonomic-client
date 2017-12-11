import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Balance from '~/components/balance';
import TokenPrice from '~/components/token-price';
import Panel from 'daonomic-ui/source/panel';
import styles from './referal-program.css';

@inject(({ auth, walletAddress }) => ({
  email: auth.email,
  address: walletAddress.address,
}))
@observer
export default class Referal extends Component {
  static propTypes = {
    email: PropTypes.string,
    address: PropTypes.string,
  };

  static defaultProps = {
    email: '',
    address: '',
  };

  render() {
    const { email, address } = this.props;

    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <Panel paddingSize="large">
            <iframe title="referal" className={styles.frame} src={`https://api.goldea.team/api/v1/referal-frame?email=${email}&wallet=${address}&token=732FFc81`} frameBorder="0" />
          </Panel>
        </TwoColumnsLayout.Left>

        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
