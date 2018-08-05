import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div></div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
