import React, { Component } from 'react';
import styles from './banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className={styles.root}>
        <a className={styles.holder} href="/app/buy" >
          <img src="//goldea.io/storage/app/media/banners/banner-002-sm.gif" className={styles.phone} alt="" />
          <img src="//goldea.io/storage/app/media/banners/banner-002-full.gif" className={styles.other} alt="" />
        </a>
      </div>
    );
  }
}
