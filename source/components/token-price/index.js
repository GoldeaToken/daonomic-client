import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import cn from 'classnames';
import pages from '~/pages';
import Panel from 'daonomic-ui/source/panel';
import Meter from 'daonomic-ui/source/meter';
import Button from 'daonomic-ui/source/button';
import Translation from '~/components/translation';
import textStyles from '~/components/text/text.css';
import formatNumber from '~/i18n/format-number';
import styles from './token-price.css';

@inject(({ payment }) => ({
  tokensCount: payment.tokensCount,
  prices: payment.prices,
}))
@observer
@withRouter
export default class TokenPrice extends Component {
  static propTypes = {
    tokensCount: PropTypes.shape({
      sold: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      notLimited: PropTypes.bool.isRequired,
    }).isRequired,
    prices: PropTypes.arrayOf(PropTypes.shape({
      rate: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleClickSwitch = () => {
    this.props.history.push(pages.app.buyTokens.getPath());
  };

  renderTokensCount = () => {
    const { tokensCount } = this.props;

    if (tokensCount.notLimited) {
      return null;
    }

    return (
      <div className={styles.section}>
        <h3 className={styles.title}>
          <Translation id="widgets:tokensSold" />
        </h3>

        <Meter value={(tokensCount.sold / tokensCount.total) || 0} />

        <p className={styles.sold}>
          {formatNumber(tokensCount.sold)} <Translation id="tokenName" />
          {' '}
          <span className={textStyles.muted}>
            of {formatNumber(tokensCount.total)}
          </span>
        </p>
      </div>
    );
  };

  renderTokenPrice = () => {
    const { prices } = this.props;

    if (prices.length === 0) {
      return null;
    }

    return (
      <div className={styles.section}>
        <h3 className={styles.title}>
          <Translation id="widgets:tokenPrice" />
        </h3>

        {prices.map(({ rate, label }) => (
          <p key={label}>
            1{label} = {formatNumber(rate)} <Translation id="tokenName" />
          </p>
        ))}

        <h3 className={cn(styles.title, styles.title_bonus)}>
          Current Bonus<br />
          15%
        </h3>

        <Button onClick={this.handleClickSwitch} className={styles.fullwidth}>
          Buy Tokens
        </Button>
      </div>
    );
  };

  render() {
    const { tokensCount, prices } = this.props;

    if (tokensCount.notLimited && prices.length === 0) {
      return null;
    }

    return (
      <Panel className={styles.root}>
        {this.renderTokenPrice()}
        {this.renderTokensCount()}
      </Panel>
    );
  }
}
