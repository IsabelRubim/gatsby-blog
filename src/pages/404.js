import React from 'react';
import { Link } from 'gatsby';

import styles from './404.module.scss';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>Page not found</h1>
      <p className={styles.errorMessage}>
          The page you are looking for does not exists.
      </p>
      <Link to='/'>Home</Link>
    </div>
  </Layout>
);