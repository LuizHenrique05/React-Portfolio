import React, { useState } from 'react'

import styles from './Sidebar.module.css'
import SidebarHeader from './Sidebar/SidebarHeader'
import SidebarInfo from './Sidebar/SidebarInfo'

export default ({ open }) => 
    <aside className={styles.sidebar} style={{ left: open }}>
        <SidebarHeader />
        <SidebarInfo />
    </aside>
    