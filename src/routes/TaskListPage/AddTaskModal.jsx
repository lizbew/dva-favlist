import { baseIntl } from '@common/reactIntl';
import React from 'react';
import { connect } from 'dva';

import { Modal } from 'antd';

class AddTaskModal extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */


    render() {
        const { showEditModal } = this.props.tasklist;
        return (
            <Modal
                title={baseIntl.get('task.add_task')}
                visible={showEditModal}
            >

            </Modal>
        );
    }
}

const mapStateToProps = ({ tasklist }) => ({ tasklist });
export default connect(mapStateToProps)(AddTaskModal);
