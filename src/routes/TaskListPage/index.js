import { baseIntl } from '@common/reactIntl';
import React from 'react';
import { connect } from 'dva';

import { Table, Button } from 'antd';
import AddTaskModal from './AddTaskModal';

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

function showTotal(total) {
    return baseIntl.get('msg.total_count', { total })
}


const TaskListPage = ({ dispatch, tasklist }) => {

    const pagination = {
        showSizeChanger: true,
        showTotal,
    }

    function handleOpenModel() {
        dispatch({
            type: 'tasklist/showEditModal'
        });
    }

    return (
        <div>
            <div>
                <Button onClick={handleOpenModel}>添加任务</Button>
            </div>
            <AddTaskModal />
            <Table
                columns={columns}
                dataSource={tasklist.list}
                rowKey="id"
                pagination={pagination}
            />
        </div>
    );
}

const mapStateToProps = ({ tasklist }) => ({ tasklist });

export default connect(mapStateToProps)(TaskListPage);

