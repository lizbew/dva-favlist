import React from 'react';
//import { connect } from 'dva';
import { Link } from 'dva/router';

import { Layout, Menu, Icon } from 'antd';

import style from './AppLayout.less';

class AppLayout extends React.Component {
    /*
    constructor(props) {
        super(props)
    }
    */

    render() {
        return (
            <Layout>
                <Layout.Sider>
                    <div className={style.logo} />

                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="user" />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/favlist">
                                <Icon type="user" />
                                <span>列表</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>

                <Layout>
                    <Layout.Header  style={{ background: '#fff', padding: 0 }}>
                        <div style={{marginLeft: '20px'}}>标题</div>
                    </Layout.Header>

                    <Layout.Content style={{ margin: '24px 16px 0' }}>
                        <div>{this.props.children}</div>
                    </Layout.Content>

                    <Layout.Footer style={{ textAlign: 'center' }}>
                        <p>Copyright&copy; 2018</p>
                    </Layout.Footer>
                </Layout>

            </Layout>

        );
    }
}


export default AppLayout;

