import request from '../utils/request';

export function queryList() {
  return request('/saytodo/tasks');
}
