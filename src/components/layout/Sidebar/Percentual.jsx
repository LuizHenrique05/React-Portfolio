import React from 'react'
import styles from './Percentual.module.css'

export default ({ percentage, text }) => {
    let calc = 220 - ( 220 * parseInt(percentage) ) / 100

    return (
        <div className={styles.percentage__div}>
            <div className={styles.percentage}>
                <svg>
                    <circle cx="35" cy="35" r="35"></circle>
                    <circle cx="35" cy="35" r="35" style={{strokeDashoffset: calc.toString()}}></circle>
                </svg>
                <div className={styles.number}>
                    <p>{percentage} <span>%</span></p>
                </div>
            </div>
            <div className={styles.text}>
                <p>{text} <span>- {percentage} %</span></p>
            </div>
        </div>
    )
}
    