import React, { useEffect, useState } from 'react'
import Card from './Card'
import items from './database'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import styles from './RecommendationsRow.module.css'

export default () => {
    const [scrollX, setScrollX] = useState(-200)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0)
            x = 0

        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round((window.innerWidth * 0.6) / 2)
        let listW = items.length * 300
        if(((window.innerWidth * 0.6)- listW) > x)
            x = ((window.innerWidth * 0.6) - listW)

        setScrollX(x)
    }

    return (
        <div className={styles.area}>
            <div className={styles.left} onClick={handleLeftArrow}><FaAngleLeft /></div>
            <div className={styles.right} onClick={handleRightArrow}><FaAngleRight /></div>
            <div className={styles.row} style={{ marginLeft: scrollX, width: items.length * 300 }}>
                {items.map((item)=>(
                    <Card key={item.id} text={item.text} name={item.name} link={item.link} />
                ))}
            </div>
        </div>
    )
}