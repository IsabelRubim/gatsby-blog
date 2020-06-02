import React from 'react';

import styles from './layout.module.scss';
import Header from './header.js';
import Footer from './footer.js';

export default ({ children }) => (
  <>
    <section className={styles.container}>
      <Header />
      <div className={styles.content}>
        { children }
      </div>          
    </section>
    <Footer>
        My new Gatsby Blog 2020
    </Footer> 
  </>    
);