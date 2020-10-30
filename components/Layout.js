import React from 'react';
import styles from './moduleStyles/Layout.module.css';
import Header from './Header'
 
export default ({children}) =>  {
  return (
    <div className={styles.container}>
        <Header />
        {children}
    </div>
  );
}
