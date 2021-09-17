import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import styles from './ArticlesList.module.css'

export default ({ article }) =>
    <ul className={styles.articles__list}>
        {article ? article.map((article, index) => (
            <li key={index}><a href={article.link}>{article.name} <FaExternalLinkAlt /></a></li>
        )) : (
            <p>No articles available yet.</p>
        )}
    </ul>