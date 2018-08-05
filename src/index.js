import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';

import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import './index.css';

import initData from './assets/initdata.json';

// 1. Initialize
const app = dva({
    initialState: {
        favlist: {
            list: initData.favlist,
        }
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/favlist').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
const App = app.start();

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <App />
    </LocaleProvider>,
    document.getElementById('root')
);
