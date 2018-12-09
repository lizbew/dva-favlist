import { baseIntl } from '@common/reactIntl';
import React from 'react';
import { connect } from 'dva';

import { 
    Table, Button , Divider
} from 'antd';
import AddTaskModal from './AddTaskModal';



function showTotal(total) {
    return baseIntl.get('msg.total_count', { total })
}


const TaskListPage = ({ dispatch, tasklist }) => {

    const columns = [
        {
            title: 'Action',
            render: (text, row, index) => (
                <span>
                    <a href="javascript:;" onClick={() => editTask(row)}>Edit</a>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={() => editTask(row)}>Cancel</a>
                </span>

            ),
            key: '1'
    
        },
        {
            title: baseIntl.get('label.title'),
            dataIndex: 'title',
            key: '2'
        },
        {
            title: baseIntl.get('label.link'),
            dataIndex: 'link',
            render: (text, record) => {
                return (
                    <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>
                );
            },
            key: '3'
        },
        {
            title: baseIntl.get('label.status'),
            dataIndex: 'status',
            key: '4'
        },
    ];

    const pagination = {
        showSizeChanger: true,
        showTotal,
    }

    function editTask(task) {
        dispatch({
            type: 'tasklist/editTaskModal',
            payload: task,
        })
    }

    function handleAddTask() {
        dispatch({
            type: 'tasklist/addTaskModal'
        });
    }

    function reloadList() {
        dispatch({
            type: 'tasklist/fetchTaskList'
        });
    }

    return (
        <div>
            <div>
                <Button onClick={handleAddTask}>添加任务</Button>
                <Button onClick={reloadList}>刷新</Button>
            </div>
            <AddTaskModal 
                onOk={reloadList}
                onCancel={reloadList}
            />
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

