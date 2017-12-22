import React, { Component } from 'react';
import styles from './popup.css';

export default class Popup extends Component {

  constructor(props) {
    super(props);

    const shown = localStorage.getItem('popup.01');

    if (shown) {
        this.state = {show:false};
    } else {
        this.state = {show:true};
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({show: false});
    localStorage.setItem('popup.01', true);
  }

  render() {
    if ( this.state.show )
      return (
        <div className={styles.root}>
          <div className={styles.popup}>
              <div className={styles.close} onClick={() => this.handleClick(this)}></div>
              <div className={styles.text}>
                <img className={styles.logo} src="https://www.goldea.io/themes/goldea/assets/img/goldea-logo-96m.png" />
                <h3 className={styles.h3}>We&nbsp;are really excited to announce that we have reached our Soft&nbsp;Cap investment objective of&nbsp;US&nbsp;$1.5&nbsp;million.</h3>
                <p className={styles.p}>We&nbsp;are now editing closer to our aims in accordance with our&nbsp;Road&nbsp;Map.</p>
                <hr/>
                <h2 className={styles.h2}>The minimum investment amount is&nbsp;now&nbsp;1.0&nbsp;ETH</h2>
              </div>
          </div>
        </div>
      );

    return null;
  }
}
