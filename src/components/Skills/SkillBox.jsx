import React from 'react'

import styles from './SkillBox.module.css'

export default ({ title, imgs }) => {
    function getImgsItens(imgs) {
        if(imgs)
            return imgs.map((img, index) => {
                return <li key={index}><img src={img.img} alt={img.title} title={img.title} /></li>
            })
    }

    return (
        <div className={styles.skill__box}>
            <p>{title}</p>
            <ul>
                {getImgsItens(imgs)}
            </ul>
        </div>
    )
}
    