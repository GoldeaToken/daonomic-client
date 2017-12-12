import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Button from 'daonomic-ui/source/button';
import Input from 'daonomic-ui/source/input';
import Panel from 'daonomic-ui/source/panel';
import Translation from '~/components/translation';
import Heading from '~/components/heading';
import Link from '~/components/link';
import styles from './ethereum-wallet.css';

@inject(({ walletAddress }) => ({
  address: walletAddress.address,
  error: walletAddress.error,
  isSaving: walletAddress.isSaving,
  isSaved: walletAddress.isSaved,
  onChangeAddress: walletAddress.setAddress,
  onSave: walletAddress.saveAddress,
}))
@observer
export default class EthereumWallet extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    isSaving: PropTypes.bool.isRequired,
    isSaved: PropTypes.bool.isRequired,
    onChangeAddress: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  handleChangeAddress = (event) => {
    this.props.onChangeAddress(event.target.value);
  };

  render() {
    const {
      address,
      error,
      isSaving,
      isSaved,
      onSave,
    } = this.props;
    const isSaveDisabled = address.trim() === '' || isSaving || isSaved;

    return (
      <Panel paddingSize="large">
        <Heading
          className={styles.title}
          tagName="h2"
          size={Heading.sizes.normal}
        >
          <Translation id="wallet:title" />
        </Heading>

        <p className={styles.paragraph}>
          <Translation
            id="wallet:annotation"
            data={{
              tokenName: Translation.text('tokenName'),
            }}
          />
          {' '}
          <Link href="/app/create-wallet">
            How to create Ethereum wallet?
          </Link>
        </p>

        <Heading
          tagName="h3"
          size={Heading.sizes.small}
        >
          <Translation id="wallet:noticeTitle" />
        </Heading>

        <div className={styles.paragraph}>
          <p className={styles.warning}><Translation id="wallet:noticeText" /></p>
          <p className={styles.warning}><strong><Translation id="wallet:noticeGasLimit" /></strong></p>
          <p className={styles.warning}><strong><Translation id="wallet:noticeGasPrice" /></strong></p>
        </div>

        <Input
          label={Translation.text('wallet:ethereumAddress')}
          value={address}
          error={error}
          onChange={this.handleChangeAddress}
        />

        <div className={styles.footer}>
          <Button disabled={isSaveDisabled} onClick={onSave}>
            {isSaved ?
              <Translation id="wallet:saved" />
              :
              <Translation id="wallet:save" />
            }
          </Button>
        </div>
      </Panel>
    );
  }
}
