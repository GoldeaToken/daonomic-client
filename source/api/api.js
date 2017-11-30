import axios from 'axios';
import sale from '~/config/sale';
import auth from '~/stores/auth';

const apiSubDomain = process.env.NODE_ENV === 'development' ? 'dev' : 'api';
const daonomicApi = axios.create({
  baseURL: `https://${apiSubDomain}.daonomic.io/v1`,
});
const daoxApi = axios.create({
  baseURL: `https://${apiSubDomain}.daox.io/v1`,
});
const goldeaApi = axios.create({
  baseURL: 'https://api.goldea.team/api/v1',
});

const getDefaultOptions = () => ({
  headers: {
    'X-AUTH-TOKEN': auth.token,
  },
});

const getEventDate = () => {
  const now = new Date();

  return `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()} ${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}.${now.getUTCMilliseconds()}`;
};

export default {
  auth: {
    login: ({ email, password }) => daonomicApi.post('/login', { username: email, password }),
    register: ({ email }) => daonomicApi.post('/register', { email }),
    resetPassword: ({ email }) => daonomicApi.post('/password/change', { email }),
    createNewPassword: ({ token, password, confirmedPassword }) => daonomicApi.post(`/password/change/${token}`, { password, password2: confirmedPassword }),
  },
  address: {
    get: () => daonomicApi.get('/address', getDefaultOptions()),
    set: ({ address }) => daonomicApi.post('/address', { address }, getDefaultOptions()),
  },
  getIcoInfo: () => daonomicApi.get(`/sales/${sale}`, getDefaultOptions()),
  issueToken: ({ token, to, data }) => daoxApi.post(`/tokens/${token}/issue`, { to, data }, getDefaultOptions()),
  getIssueRequestStatus: ({ id }) => daoxApi.get(`/requests/${id}/status`),
  getBalance: () => daonomicApi.get(`/sales/${sale}/balance`, getDefaultOptions()),
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
