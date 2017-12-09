import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Page from 'daonomic-ui/source/page';
import Header from '~/components/header';
import Banner from '~/components/banner';
import Footer from '~/components/footer';
import styles from './app-layout.css';

export default class AppLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <Page>
        <div className={cn(styles.container, styles.banner)}>
          <Banner />
        </div>

        <Page.Header>
          <div className={cn(styles.container, styles.header)}>
            <Header />
          </div>
        </Page.Header>

        <Page.Content>
          <div className={styles.container}>
            {children}
          </div>
        </Page.Content>

        <Page.Footer>
          <Footer className={styles.container} />
        </Page.Footer>
      </Page>
    );
  }
}
