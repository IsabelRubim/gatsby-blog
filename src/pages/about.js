import React from 'react';

import styles from './about.module.scss';
import Layout from '../components/layout';
import Title from '../components/title';

export default () => (
  <Layout>
    <Title text='About me' />    
    <p className={styles.contentAbout}>
      Hello, i am Isabel Rubim and i am having fun with gatsby.
    </p>
  </Layout>
);