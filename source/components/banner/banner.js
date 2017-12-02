import React, { Component } from 'react';
import styles from './banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className={styles.root}>
        <a href="/app/buy" >
          <img src="//goldea.io/storage/app/media/banners/banner-001-sm.gif" className={styles.phone} />
          <img src="//goldea.io/storage/app/media/banners/banner-001-full.gif" className={styles.other} />
        </a>
      </div>
    );
  }
}
