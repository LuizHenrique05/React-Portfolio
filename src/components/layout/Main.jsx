import React from 'react'

import styles from './Main.module.css'

export default props =>
    <main className={styles.main}>
        {props.children}
    </main> 