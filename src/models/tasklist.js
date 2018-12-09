import { queryList, createTask, updateTask } from '../services/tasklist';

import { message } from 'antd';

export default {

    namespace: 'tasklist',

    state: {
        list: [],
        showEditModal: false,
        task: null,
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            history.listen((location) => {
                if (location.pathname === '/tasklist') {
                    dispatch({
                        type: 'fetchTaskList'
                    });
                }
            });
        },
    },

    effects: {
        *fetchTaskList({ payload }, { call, put }) {  // eslint-disable-line
            const { data, err } = yield call(queryList);
            if (err) {
                message.error('query task list error: ' + err);
                return;
            }

            yield put({
                type: 'setData',
                payload: {
                    list: data.list
                }
            });
        },
        *saveTask({ payload }, { call, put }) {
            if (!payload.id) {
                const { err } = yield call(createTask, payload);
                if (err) {
                    message.error('add task error: ' + err);
                    return;
                }
            } else {
                const { err } = yield call(updateTask, payload);
                if (err) {
                    message.error('update task error: ' + err);
                    return;
                }
            }
            

        }
    },

    reducers: {
        setData(state, action) {
            return { ...state, ...action.payload };
        },
        addTaskModal(state, action) {
            return {
                ...state,
                showEditModal: true,
                task: null
            };
        },
        closeTaskModal(state, action) {
            return {
                ...state,
                showEditModal: false,
            };
        },
        editTaskModal(state, { payload }) {
            return {
                ...state,
                showEditModal: true,
                task: payload
            };
        }

    },

};
