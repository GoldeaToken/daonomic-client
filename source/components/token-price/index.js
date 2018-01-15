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

  constructor(p) {
    super(p);
    const { prices } = this.props;

    this.state = {input1:1, input2: 1, select1: 'GEA', select2:'GEA'};
    this.reCalc(1);
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
        <p> $1,500,000 </p>
      </div>
    );
  };


  handleInput1Change = (e) => {
    this.state.input1 = e.target.value;
    this.reCalc(2);
  };

  handleInput2Change = (e) => {
    this.state.input2 = e.target.value;
    this.reCalc(1);
  };


  handleSelect1Change = (e) => {
    this.state.select1 = e.target.value;
    this.reCalc(2);
  };

  handleSelect2Change = (e) => {
    this.state.select2 = e.target.value;
    this.reCalc(1);
  };


  reCalc = (block) => {
    const { prices } = this.props;
    const rate = [];

    if (prices.length === 0) {
      return null;
    }

    for( var key in prices) {
      rate[ prices[key].label ] = prices[key].rate;
    }

    if( 1===block ) {
      if ( this.state.select1 == this.state.select2 ) {
        this.setState( {input1: this.state.input2 } );
      } else {
        if ( 'GEA'=== this.state.select1 ) {
          if ( 'BTC'=== this.state.select2 ) {
            this.setState( {input1: this.state.input2 * rate['BTC']} );
          } else if ( 'ETH'=== this.state.select2 ) {
            this.setState( {input1: this.state.input2 * rate['ETH']} );
          }
        } else if ( 'BTC'=== this.state.select1 ) {
          if ( 'GEA'=== this.state.select2 ) {
            this.setState( {input1: this.state.input2 / rate['BTC']} );
          } else if ( 'ETH'=== this.state.select2 ) {
            this.setState( {input1: this.state.input2 / rate['BTC'] * rate['ETH']} );
          }
        } else if ( 'ETH'=== this.state.select1 ) {
          if ( 'BTC'=== this.state.select2 ) {
            this.setState( {input1: this.state.input2 / rate['ETH'] * rate['BTC']} );
          } else if ( 'GEA'=== this.state.select2 ) {
            this.setState( {input1: this.state.input2 / rate['ETH']} );
          }
        }
      }
    } else {
      if ( this.state.select1 == this.state.select2 ) {
        this.setState( {input2: this.state.input1 } );
      } else {
        if ( 'GEA'=== this.state.select1 ) {
          if ( 'BTC'=== this.state.select2 ) {
            this.setState( {input2: this.state.input1 / rate['BTC']} );
          } else if ( 'ETH'=== this.state.select2 ) {
            this.setState( {input2: this.state.input1 / rate['ETH']} );
          }
        } else if ( 'BTC'=== this.state.select1 ) {
          if ( 'GEA'=== this.state.select2 ) {
            this.setState( {input2: this.state.input1 * rate['BTC']} );
          } else if ( 'ETH'=== this.state.select2 ) {
            this.setState( {input2: this.state.input1 * rate['BTC'] / rate['ETH']} );
          }
        } else if ( 'ETH'=== this.state.select1 ) {
            this.setState( {input2: this.state.input1 * rate['ETH'] / rate['BTC']} );
          if ( 'BTC'=== this.state.select2 ) {
          } else if ( 'GEA'=== this.state.select2 ) {
            this.setState( {input2: this.state.input1 * rate['ETH']} );
          }
        }
      }
    }
    console.log( block, this.state );
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

        <div>
            <div className={styles.inputholder}>
              <input className={styles.input} value={this.state.input1} onChange={this.handleInput1Change} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" />
              <span className={styles.currency}></span>
              <select className={styles.select} value={this.state.select1} onChange={this.handleSelect1Change}>
                <option disabled={ this.state.select2 =='ETH'? true : null}  value="ETH">ETH</option>
                <option disabled={ this.state.select2 =='BTC'? true : null}  value="BTC">BTC</option>
                <option disabled={ this.state.select2 =='GEA'? true : null}  value="GEA">GEA</option>
              </select>
            </div>

            <div className={styles.inputholder}>
              <input className={styles.input} value={this.state.input2} onChange={this.handleInput2Change} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" />
              <span className={styles.currency}></span>
              <select className={styles.select} value={this.state.select2} onChange={this.handleSelect2Change}>
                <option disabled={ this.state.select1 =='ETH'? true : null}  value="ETH">ETH</option>
                <option disabled={ this.state.select1 =='BTC'? true : null}  value="BTC">BTC</option>
                <option disabled={ this.state.select1 =='GEA'? true : null}  value="GEA">GEA</option>
              </select>
            </div>
        </div>

        <h3 className={cn(styles.title, styles.title_bonus)}>
          Current price $15 per token
        </h3>

        <h3 className={cn(styles.title, styles.title_bonus)}>
          Current Bonus 5%
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
