import axios from 'axios';
import { sale, realm } from '~/config/common';
import auth from '~/stores/auth';

const defaultOptions = {
  get headers() { // auth token can be changed, so we need to recalculate headers before every request
    return {
      'X-REALM': realm,
      'X-AUTH-TOKEN': auth.token,
    };
  },
};
const apiSubDomain = process.env.API === 'development' ? 'dev-api' : 'api';
const daonomicApi = axios.create({
  baseURL: `https://${apiSubDomain}.daonomic.io/v1`,
});
const daoxApi = axios.create({
  baseURL: `https://${apiSubDomain}.daox.io/v1`,
});
const goldeaApi = axios.create({
  baseURL: 'https://investor.goldea.io/api/v1',
});

const getEventDate = () => {
  const now = new Date();

  return `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()} ${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}.${now.getUTCMilliseconds()}`;
};

export default {
  auth: {
    login: ({ email, password }) => daonomicApi.post(
      '/login',
      { username: email, password },
      defaultOptions,
    ),
    register: ({ email }) => daonomicApi.post(
      '/register',
      { email },
      defaultOptions,
    ),
    resetPassword: ({ email }) => daonomicApi.post(
      '/password/change',
      { email },
      defaultOptions,
    ),
    createNewPassword: ({ token, password, confirmedPassword }) => daonomicApi.post(
      `/password/change/${token}`,
      {
        password,
        password2: confirmedPassword,
      },
      defaultOptions,
    ),
  },
  address: {
    get: () => daonomicApi.get('/address', defaultOptions),
    set: ({ address }) => daonomicApi.post(
      '/address',
      { address },
      defaultOptions,
    ),
  },
  getIcoInfo: () => daonomicApi.get(`/sales/${sale}`, defaultOptions),
  issueToken: ({ token, to, data }) => daoxApi.post(
    `/tokens/${token}/issue`,
    { to, data },
    defaultOptions,
  ),
  getIssueRequestStatus: ({ id }) => daoxApi.get(`/requests/${id}/status`, defaultOptions),
  getBalance: () => daonomicApi.get(`/sales/${sale}/balance`, defaultOptions),
  events: {
    logLogin: ({ email }) => goldeaApi.post('/daocli/catchup', {
      email,
      event: 'auth',
      date: getEventDate(),
    }),
    logRegistration: ({ email }) => goldeaApi.post('/daocli/catchup', {
      email,
      event: 'reg',
      date: getEventDate(),
    }),
    logWalletSave: ({ walletId, email }) => goldeaApi.post('/daocli/catchup', {
      email,
      event: 'wallet:new',
      date: getEventDate(),
      wallet: walletId,
    }),
  },
};
