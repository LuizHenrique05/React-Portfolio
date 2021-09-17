import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export default () =>
    <nav className={styles.navbar}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Recommendations</Link>
            </li>
            <li className={styles.item}>
                <Link to="/my-skills">My Skills</Link>
            </li>
            <li className={styles.item}>
                <Link to="/my-projects">My Projects</Link>
            </li>
            <li className={styles.item}>
                <Link to="/my-articles">My Articles</Link>
            </li>
        </ul>
    </nav> 