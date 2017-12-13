import SignIn from '~/pages/sign-in';
import SignUp from '~/pages/sign-up';
import ResetPassword from '~/pages/reset-password';
import CreateNewPassword from '~/pages/create-new-password';
import Telegram from '~/pages/telegram-chat';
import Referal from '~/pages/referal-program';
import TwitterNews from '~/pages/twitter-news';
import Timeline from '~/pages/timeline';
import HowToBuy from '~/pages/how-to-buy';
import Bounty from '~/pages/bounty';
import BuyTokens from '~/pages/buy-tokens';
import CreateWallet from '~/pages/create-wallet';
import Faq from '~/pages/faq';
import AppLayout from '~/components/app-layout';

const appPrefix = '/app';

export default {
  signin: {
    getPath: () => '/sign/in',
    component: SignIn,
  },

  signup: {
    getPath: () => '/sign/up',
    component: SignUp,
  },

  sendResetInstructions: {
    getPath: () => '/sign/reset-password',
    component: ResetPassword,
  },

  createNewPassword: {
    getPath: (token) => `/sign/create-new-password/${token}`,
    component: CreateNewPassword,
  },

  app: {
    getPath: () => appPrefix,
    component: AppLayout,

    telegram: {
      getPath: () => `${appPrefix}/telegram`,
      title: 'Telegram Chat',
      component: Telegram,
    },

    referal: {
      getPath: () => `${appPrefix}/referal`,
      title: 'Referral Program',
      component: Referal,
    },

    twitterNews: {
      getPath: () => `${appPrefix}/news`,
      title: 'News',
      component: TwitterNews,
    },

    timeline: {
      getPath: () => `${appPrefix}/timeline`,
      title: 'Timeline',
      component: Timeline,
    },

    howToBuy: {
      getPath: () => `${appPrefix}/how-to-buy`,
      title: 'How To Buy',
      component: HowToBuy,
    },

    bounty: {
      getPath: () => `${appPrefix}/bounty`,
      title: 'Bounty',
      component: Bounty,
    },

    buyTokens: {
      getPath: () => `${appPrefix}/buy`,
      title: 'Buy Tokens',
      component: BuyTokens,
    },

    createWallet: {
      getPath: () => `${appPrefix}/create-wallet`,
      title: 'Create Wallet',
      component: CreateWallet,
    },

    faq: {
      getPath: () => `${appPrefix}/faq`,
      title: 'For Investors',
      component: Faq,
    },
  },
};
