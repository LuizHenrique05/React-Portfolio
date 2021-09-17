import React from 'react'

import styles from './Card.module.css'

export default ({ text, name, link }) => 
    <div className={styles.card}>
        <p><span>"</span>{text}<span>".</span></p>
        <a target="_blank" href={link}>
            <p>{name}</p>
        </a>
    </div>