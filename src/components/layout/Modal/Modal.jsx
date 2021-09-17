import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import herokuImg from '../../../img/herokuapp.png'

import styles from './Modal.module.css'

export default ({ thumb, title, description, github, heroku, technology, display, closeClick }) => {

    return (
        <div className={styles.overlay} style={{ display: display }}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <p>{title}</p>
                    <p className={styles.close} onClick={e => { closeClick('none') }}>X</p>
                </div>
                <div className={styles.sub_header}>
                    <ul>
                        {technology && technology.map((tech, index)=>(
                            <li key={index}>{index > 0 && (<span>- </span>)}{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.body}>
                    <div>
                        <img src={thumb} alt={title} />
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={styles.footer}>
                    <ul>
                        {github != '' && ( 
                            <li><a href={github} target="_blank"><FaGithub /></a></li>
                        )}  
                        {heroku != '' && (
                            <li><a href={heroku} target="_blank"><img src={herokuImg} alt="herokuapp" title="herokuapp" /></a></li>
                        )} 
                    </ul>
                </div>
            </div>
        </div>
    )
}
    
    