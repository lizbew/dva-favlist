import React from 'react';
import { connect } from 'dva';

import {Table } from 'antd';

const columns = [
    {
        title: '#',
        dataIndex: 'id'
    },
    {
        title: '标题',
        dataIndex: 'title'
    },
    {
        title: '链接',
        dataIndex: 'link',
        render: (text, record) => {
            return (
                <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>
            );
        }
    },
];

function showTotal(total){
    return `总共${total}项`;
}

const FavListPage = ({favlist}) =>　{

    const pagination= {
        showSizeChanger: true,
        showTotal,
    }

    return (
        <div>
            <Table 
                columns={columns}
                dataSource={favlist.list}
                rowKey="id"
                pagination={pagination}
            />
        </div>
    );
}

const mapStateToProps = ({ favlist }) => ({ favlist });

export default connect(mapStateToProps)(FavListPage);

