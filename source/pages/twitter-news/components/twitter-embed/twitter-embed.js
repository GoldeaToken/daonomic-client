import React, { PureComponent } from 'react';
import Translation from '~/components/translation';
import Panel from '~/components/panel';
import styles from './twitter-embed.css';

export default class TwitterEmbed extends PureComponent {
  componentDidMount() {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }

  render() {
    return (
      <Panel paddingSize={Panel.paddingSizes.large}>
        <div className={styles['twitter-container']}>
          <a className="twitter-timeline" href="https://twitter.com/GOLDEA_io"><Translation id="news:tweets" /></a>
        </div>
      </Panel>
    );
  }
}
