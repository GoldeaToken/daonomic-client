import React, { PureComponent } from 'react';
import Translation from '~/components/translation';
import Panel from '~/components/panel';
import Heading from '~/components/heading';
import Spoiler from '~/components/spoiler';
import { entries, documents } from '~/config/faq';
import EmailUs from './components/email-us';
import styles from './faq.css';

export default class Faq extends PureComponent {
  render() {
    return (
      <div>
        <Panel>
          <Heading
            tagName="h1"
            size={Heading.sizes.normal}
            className={styles.title}
          >
            <Translation id="faq:title" />
          </Heading>

          <div className={styles.list}>
            {entries.map(({ question, answer }) => (
              <Spoiler key={question} title={question}>
                {answer}
              </Spoiler>
            ))}
          </div>

          <section className={styles.container}>
            {documents.map(({ url, previewUrl, title }) => (
              <a className={styles.license} href={url} title={title} target="_blank" rel="noopener noreferrer">
                <div className={styles.title}>{ title }</div>
                <div className={styles.pic}>
                  <img className={styles.preview} src={previewUrl} alt="document" />
                </div>
              </a>
            ))}
          </section>
        </Panel>

        <EmailUs />
      </div>
    );
  }
}
