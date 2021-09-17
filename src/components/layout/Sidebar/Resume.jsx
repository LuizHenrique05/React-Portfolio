import React from 'react'
import { FaDownload } from 'react-icons/fa'

import styles from './Resume.module.css'
import resume from '../../../pdf/Resume-Luiz-Henrique-en-us.pdf'

export default () =>
    <a className={styles.resume} href={resume} download>
        Resume <span><FaDownload /></span>
    </a>