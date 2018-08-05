import dva from 'dva';
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
app.start('#root');
