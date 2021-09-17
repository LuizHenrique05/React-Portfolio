import React from 'react'
import Percentual from './Percentual'
import SidebarInfoList from './SidebarInfoList'
import Resume from './Resume'
import Contact from './Contact'

import styles from './SidebarInfo.module.css'

export default () =>
    <div className={styles.sidebar__infos}>
        <div className={styles.item}>
            <SidebarInfoList label="Residence" info="Brazil" />
            <SidebarInfoList label="City" info="Marília" />
            <SidebarInfoList label="Age" info="22" />
        </div>
        <div className={styles.item}>
            <div className={styles.percent__container}>
                <Percentual percentage="100" text="Portuguese" />
                <Percentual percentage="90" text="English" />
                <Percentual percentage="60" text="Spanish" />
            </div>            
        </div>
        <div className={styles.item}>
            <Contact />
        </div>
        <div className={styles.item}>
            <Resume />
        </div>
    </div>