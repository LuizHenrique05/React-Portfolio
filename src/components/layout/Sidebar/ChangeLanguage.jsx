import React from 'react'
import en from '../../../img/languages/united-states.png'
import br from '../../../img/languages/brazil.png'
import { useTranslation } from 'react-i18next'

import styles from './ChangeLanguage.module.css'

export default ({ language }) => {
    const { t, i18n } = useTranslation()

    function handleClick(lang) {
        i18n.changeLanguage(lang)
    }

//onClick={()=> { handleClick(language) }}
    return (
        <p >
            {language == 'en' ? (
                <span><img src={en} alt={language} /></span>
            ) : (
                <span><img src={br} alt={language} /></span>
            )}
            {language}
        </p>
    )
}
    