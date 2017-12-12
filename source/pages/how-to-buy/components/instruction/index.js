import React, { PureComponent } from 'react';
import Translation from '~/components/translation';
import Panel from 'daonomic-ui/source/panel';
import Link from '~/components/link';
import createWalletImage from './resources/create-wallet.jpg';
import keyStoreImage from './resources/key-store.jpg';
import privateKeyImage from './resources/private-key.jpg';
import sendEtherImage from './resources/send.jpg';
import purseImage from './resources/purse.jpg';
import styles from './instruction.css';

export default class Instruction extends PureComponent {
  render() {
    return (
      <Panel paddingSize="large">
        <p className={styles.paragraph}>
          <Translation id="instruction:createYourEthereumPurse" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:distributionOfGeaTokens" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:createPurse" /> <Link href="https://www.myetherwallet.com/" target="_blank" rel="noopener noreferrer"><Translation id="instruction:myetherwallet" /></Link>
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:complicatedPassword" />
        </p>

        <Link href={createWalletImage} target="_blank" rel="noopener noreferrer">
          <img className={styles.image} src={createWalletImage} alt="Create New Wallet" />
        </Link>

        <p className={styles.paragraph}>
          <Translation id="instruction:accessToWallet" />
        </p>

        <Link href={keyStoreImage} target="_blank" rel="noopener noreferrer">
          <img className={styles.image} src={keyStoreImage} alt="Key Store" />
        </Link>

        <p className={styles.paragraph}>
          <Translation id="instruction:savePrivateKey" />
        </p>

        <Link href={privateKeyImage} target="_blank" rel="noopener noreferrer">
          <img className={styles.image} src={privateKeyImage} alt="Private Key" />
        </Link>

        <p className={styles.paragraph}>
          <Translation id="instruction:loginToWallet" />
        </p>

        <Link href={sendEtherImage} target="_blank" rel="noopener noreferrer">
          <img className={styles.image} src={sendEtherImage} alt="Send Ether" />
        </Link>

        <p className={styles.paragraph}>
          <Translation id="instruction:purseIsCreated" />
        </p>

        <Link href={purseImage} target="_blank" rel="noopener noreferrer">
          <img className={styles.image} src={purseImage} alt="Purse Created" />
        </Link>

        <p className={styles.paragraph}>
          <Translation id="instruction:smartContract" />
        </p>

        <p className={styles.paragraph}>
          <span className={styles.warning}><Translation id="instruction:address" /></span>
        </p>

        <p className={styles.paragraph}>
          <span className={styles.warning}><Translation id="instruction:gasLimit" /> 150000 Gwei (more than)</span>
        </p>

        <p className={styles.paragraph}>
          <span className={styles.warning}><Translation id="instruction:gasPrice" /> 50 Gwei (more than)</span>
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:rechargeWallet" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:replenishPurse" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:fiatMoney" /> <br />
          <Translation id="instruction:monet" /> <br />
          <Translation id="instruction:xchange" /> <br />
          <Translation id="instruction:cashbank" /> <br />
          <Translation id="instruction:newline" /> <br />
          <Translation id="instruction:imexchanger" /> <br />
          <Translation id="instruction:exchange" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:chooseExchanger" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:moreInformation" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:workOfTheExchangers" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="instruction:chooseMethod" />
        </p>
      </Panel>
    );
  }
}
