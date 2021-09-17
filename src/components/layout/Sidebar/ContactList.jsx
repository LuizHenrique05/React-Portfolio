import React from 'react'

import styles from './ContactList.module.css'

export default ({ label, text, link }) =>
    <div className={styles.container}>
        <ul>
            <li>{label} </li>
            <li><a href={link}>{text}</a></li>
        </ul>
    </div>