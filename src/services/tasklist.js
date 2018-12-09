import request from '../utils/request';
import { createPostJsonOptions, createPutJsonOptions } from '../utils/http';

export function queryList() {
  return request('/saytodo/tasks');
}

export function createTask(data) {
  return request('/saytodo/tasks', createPostJsonOptions(data));
}

export function updateTask(data) {
  return request(`/saytodo/tasks/${data.id}`, createPutJsonOptions(data));
}
