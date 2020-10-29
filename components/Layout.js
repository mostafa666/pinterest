import React from 'react';
import styles from './moduleStyles/Layout.module.css';

 
export default ({children}) =>  {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
}
