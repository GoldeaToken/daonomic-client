import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './';

storiesOf('Navigation', module)
  .add('default', () => (
    <Navigation>
      <Navigation.Item href="#telegram">
        Telegram
      </Navigation.Item>

      <Navigation.Item href="#news">
        News
      </Navigation.Item>

      <Navigation.Item href="#timeline">
        Timeline
      </Navigation.Item>

      <Navigation.Item href="#how-to-buy">
        How To Buy
      </Navigation.Item>

      <Navigation.Item href="#bounty">
        Bounty
      </Navigation.Item>

      <Navigation.Item href="#buy">
        Buy Tokens
      </Navigation.Item>

      <Navigation.Item isActive href="#history">
        Transaction History
      </Navigation.Item>

      <Navigation.Item href="#white-paper">
        White Paper
      </Navigation.Item>

      <Navigation.Item href="#investors">
        For Investors
      </Navigation.Item>
    </Navigation>
  ));
