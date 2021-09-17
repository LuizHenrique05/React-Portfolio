import React from 'react'

import styles from './SidebarInfoList.module.css'

export default ({ label, info }) =>
    <ul className={styles.list}>
        <li>{ label }</li>
        <li>{ info }</li>
    </ul>