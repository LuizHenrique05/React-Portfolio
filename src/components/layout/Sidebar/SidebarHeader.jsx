import React from 'react'
import profile from '../../../img/profile.png'

import styles from './SidebarHeader.module.css'

export default () =>
    <div className={styles.header}>
        <img src={profile} alt="me" />
        <p className={styles.name}>Luiz Henrique</p>
        <p className={styles.short}>Hello world! I'm web developer. :)</p>
    </div>