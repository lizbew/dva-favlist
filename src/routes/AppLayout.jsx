import { baseIntl } from '@common/reactIntl';
import React from 'react';
//import { connect } from 'dva';
import { Link } from 'dva/router';

import { Layout, Menu, Icon, Select } from 'antd';

import style from './AppLayout.less';

const Option = Select.Option;

const languageList = [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
];


class AppLayout extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentLang: baseIntl.getCurrentLanguage(),
        }
    }
    

    changLanguage = (value) => {
        this.setState({
            currentLang: value,
        });

        baseIntl.changLanguage(value, () =>{
            window.location.reload();
        });
    }


    render() {
        const selectOptions = languageList.map((a) => <Option key={a[0]}>{a[1]}</Option>);

        return (
            <Layout>
                <Layout.Sider>
                    <div className={style.logo} />

                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="home" />
                                <span>{baseIntl.get('menu.homepage')}</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/favlist">
                                <Icon type="star-o" />
                                <span>{baseIntl.get('menu.list')}</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>

                <Layout>
                    <Layout.Header  style={{ background: '#fff', padding: 0 }}>
                        <div style={{marginLeft: '20px'}}>
                            <span style={{marginRight: '20px'}}>{baseIntl.get('label.title')}</span>

                            <Select onChange={this.changLanguage} value={this.state.currentLang} style={{ width: 100 }}>
                                {selectOptions}
                            </Select>
                        </div>
                        
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


