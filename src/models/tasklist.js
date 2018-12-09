import {queryList}  from '../services/tasklist';

import { message} from 'antd';

export default {

    namespace: 'tasklist',
  
    state: {
        list: [],
        showEditModal: false,
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
        const {data, error } = yield call(queryList);
        if (error) {
            message.error('query task list error: ' + error);
            return;
        }

        yield put({ 
            type: 'save',
            payload: {
                list: data.list
            }
         });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      showEditModal(state, action) {
        return { 
            ...state,
            showEditModal: true,
            };
      },
      closeEditModal(state, action) {
        return { 
            ...state,
            showEditModal: false,
            };
      },
    },
  
  };
  