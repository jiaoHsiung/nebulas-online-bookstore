import { Base64 } from 'js-base64';
import { ENV } from './env';

const authInfo = {
  username: 'yao.chun@dianrong.com',
  password: ENV ? 'welcome1' : 'abcd.1234'
};

export function basicAuth({username, password} = authInfo) {
  return `Basic ${Base64.encode(`${username}:${password}`)}`;
}
