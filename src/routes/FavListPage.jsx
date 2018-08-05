import { baseIntl } from '@common/reactIntl';
import React from 'react';
import { connect } from 'dva';

import {Table } from 'antd';

const columns = [
    {
        title: '#',
        dataIndex: 'id'
    },
    {
        title: baseIntl.get('label.title'),
        dataIndex: 'title'
    },
    {
        title: baseIntl.get('label.link'),
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

