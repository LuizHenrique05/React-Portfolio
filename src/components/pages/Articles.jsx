import React from 'react'
import ArticlesList from '../Articles/ArticlesList'

import styles from './Articles.module.css'

export default () => {
    const articles = [
        {
            name: 'Best Article 1',
            link: '#'
        },
        {
            name: 'Best Article 2',
            link: '#'
        },
        {
            name: 'Best Article 3',
            link: '#'
        },
        {
            name: 'Best Article 4',
            link: '#'
        }
    ]
    return (
        <div className={styles.articles}>
            <p>My Articles</p>
            <ArticlesList article={articles} />
        </div>
    )
}
    