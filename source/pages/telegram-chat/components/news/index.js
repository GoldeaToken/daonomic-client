import React, { PureComponent } from 'react';
import Translation from '~/components/translation';
import Panel from 'daonomic-ui/source/panel';
import Heading from '~/components/heading';
import styles from './news.css';

export default class News extends PureComponent {
  render() {
    return (
      <Panel paddingSize="large">
        <Heading
          tagName="h3"
          size={Heading.sizes.normal}
        >
          <Translation id="news:title" />
        </Heading>

        <p className={styles.paragraph}>
          <Translation id="news:currentStatus" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="news:fundsRaised" />
        </p>

        <p className={styles.paragraph}>
          <Translation id="news:projectStatus" />
        </p>

        <ul className={styles.list}>
          <li className={styles.marker}>
            <Translation id="news:goldMinePlantOrdering" />
          </li>
          <li>
            <Translation id="news:infrastructureSetup" />
          </li>
          <li>
            <Translation id="news:campConstruction" />
          </li>
          <li>
            <Translation id="news:securingHeavyDutyMachinery" />
          </li>
          <li>
            <Translation id="news:goldPropertyPreparation" />
          </li>
          <li>
            <Translation id="news:goldMinePlantFinalization" />
          </li>
        </ul>
      </Panel>
    );
  }
}
