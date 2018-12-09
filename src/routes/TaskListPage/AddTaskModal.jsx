import { baseIntl } from '@common/reactIntl';
import React from 'react';
import { connect } from 'dva';

import { Modal, Input, Form, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const TASK_STATUS_LIST = ['new', 'progress', 'cancel', 'complete']

class AddTaskModal extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    handleClose = (callback) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'tasklist/closeTaskModal'
        });
        if (callback) {
            callback();
        }
    };

    handleModalOk = () => {
        this.handleFormSubmit();
        this.handleClose(this.props.onOk);
    };

    handleModalCancel = () => {
        this.handleClose(this.props.onCancel);
    };

    handleFormSubmit = () => {
        const { dispatch, form } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'tasklist/saveTask',
                    payload: values,
                });
            }
        });
    };

    render() {
        const { showEditModal } = this.props.tasklist;
        const { getFieldDecorator } = this.props.form;
        /*
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };

        */

        const statusOptions = TASK_STATUS_LIST.map(s => (
            <Option key={s}>{s}</Option>
        ));


        getFieldDecorator('id');
        return (
            <Modal
                title={baseIntl.get('task.add_task')}
                visible={showEditModal}
                okText="保存"
                onOk={this.handleModalOk}
                onCancel={this.handleModalCancel}
            >
                <Form layout="vertical">
                    <FormItem
                        
                        label="Title"
                    >
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input Title' }]

                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem
                        
                        label="Content"
                    >
                        {getFieldDecorator('content')(
                            <TextArea rows={4}/>
                        )}
                    </FormItem>
                    <FormItem
                        
                        label="Link"
                    >
                        {getFieldDecorator('link')(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        
                        label="Status"
                    >
                        {getFieldDecorator('status')(
                            <Select>
                                {statusOptions}
                            </Select>
                        )}
                    </FormItem>
                </Form>

            </Modal>
        );
    }
}

const WrappedTaskModalForm = Form.create({
    mapPropsToFields(props) {
        const { tasklist } = props;
        if (!tasklist.task) {
            return {};
        }
        const { task } = tasklist;
        const fields = {};
        Object.keys(task).forEach(k => {
            fields[k] = Form.createFormField({
                value: task[k],
            });
        });
        return fields;
    },
})(AddTaskModal);

const mapStateToProps = ({ tasklist }) => ({ tasklist });
export default connect(mapStateToProps)(WrappedTaskModalForm);
