import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

import styles from './SideBarOpenButton.module.css'

export default props => 
    <button className={styles.sidebar_open_btn} onClick={e => {props.onClicar()}}><FaBars /></button>
    