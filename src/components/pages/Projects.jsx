import React from 'react'
import ProjectArea from '../Projects/ProjectArea'

import styles from './Projects.module.css'

export default () =>
    <div className={styles.project}>
        <p>My Projects</p>
        <ProjectArea />
    </div>