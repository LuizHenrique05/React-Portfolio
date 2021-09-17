import React from 'react'

import styles from './About.module.css'

export default () =>
    <>
        <p className={styles.name}>Luiz Henrique</p>
        <p className={styles.position}>Front-end and Back-end Web Developer</p>
        <p className={styles.description}>Graduated in <span className={styles.highlighted}>Computer Science</span> from Univem.</p>
        <p className={styles.description}>Currently a web developer, working for <span className={styles.highlighted}>2 years</span> both as a <span className={styles.highlighted}>front-end</span> and also in a <span className={styles.highlighted}>back-end.</span></p>
        <p className={styles.description}>I love technology, I study every day to become better and better and write <span className={styles.highlighted}>quality code</span>. I'm currently studying front-end frameworks like <span className={styles.highlighted}>ReactJS</span> and <span className={styles.highlighted}>Vue.js</span>, and back-end frameworks like <span className={styles.highlighted}>Laravel</span> and <span className={styles.highlighted}>ExpressJS.</span></p>
    </>