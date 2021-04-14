/* eslint-disable */
import { API, headers } from '../../utils';

export const createTask = (data, token) => {
  headers(token);
  console.log('task data ', data);
  return API.post('/tasks', data);
};

export const getTask = token => {
  headers(token);
  return API.get('/tasks');
};

export const updateTask = (data, token) => {
  headers(token);
  return API.patch(`/tasks/${data.id}`, data.task);
};
