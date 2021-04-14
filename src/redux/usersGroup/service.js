/* eslint-disable */
import { API, headers } from '../../utils';

export const createGroup = (data, token) => {
  headers(token);
  // console.log('token', token);
  console.log('group data', data);
  return API.post('/groups', data);
};
export const getGroups = token => {
  headers(token);
  return API.get('/groups');
};
