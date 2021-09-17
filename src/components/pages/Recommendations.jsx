import React from 'react'
import RecomendationsRow from '../Recommendations/RecommendationsRow'

import styles from './Recommendations.module.css'

export default () => 
    <div className={styles.recommendation}>
        <p>Recommendations</p>
        <RecomendationsRow />
    </div>