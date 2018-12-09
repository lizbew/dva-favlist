import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import { baseIntl } from '@common/reactIntl';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';

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
app.model(require('./models/tasklist').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
const App = app.start();

const lang = baseIntl.getCurrentLanguage();

ReactDOM.render(
    <LocaleProvider locale={lang === 'zh-CN'? zhCN: enUS}>
        <App />
    </LocaleProvider>,
    document.getElementById('root')
);
