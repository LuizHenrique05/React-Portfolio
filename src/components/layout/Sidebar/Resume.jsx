import React from 'react'
import { FaDownload } from 'react-icons/fa'

import styles from './Resume.module.css'

export default () =>
    <a className={styles.resume} href="#!">
        Resume <span><FaDownload /></span>
    </a>