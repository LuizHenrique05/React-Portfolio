import React from 'react'
import SkillBox from '../Skills/SkillBox'

import cloud9 from '../../img/skills/cloud9.png'
import xampp from '../../img/skills/xampp.png'

import tray from '../../img/skills/tray.png'
import fbits from '../../img/skills/fbits.png'
import nuvemshop from '../../img/skills/nuvemshop.png'
import lojaintegrada from '../../img/skills/lojaintegrada.png'

import styles from './Skills.module.css'

export default () => {
    const frontend = [
    {
        title: 'ReactJS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        title: 'JavaScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        title: 'jQuery',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
    },
    {
        title: 'HTML5',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    }, 
    {
        title: 'CSS3',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        title: 'Stylus',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stylus/stylus-original.svg'
    },
    {
        title: 'Sass',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
    }
    ]
    const backend = [
    {
        title: 'Laravel',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
    },
    {
        title: 'PHP',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    }, 
    {
        title: 'NodeJS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    }]
    const database = [
    {
        title: 'MySQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    }, 
    {
        title: 'MongoDB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    }]
    const tools = [
    {
        title: 'Github',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
    },
    {
        title: 'Visual Studio Code',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
        title: 'PHPStorm',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg'
    },
    {
        title: 'AWS Cloud9',
        img: cloud9
    },
    {
        title: 'XAMPP',
        img: xampp
    },
    {
        title: 'Slack',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg'
    },
    {
        title: 'Filezilla',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg'
    },
    {
        title: 'Heroku',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg'
    },
    {
        title: 'Figma',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }]
    const platforms = [
    {
        title: 'WordPress',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'
    },
    {
        title: 'Tray',
        img: tray
    },
    {
        title: 'Fbits',
        img: fbits
    },
    {
        title: 'NuvemShop',
        img: nuvemshop
    },
    {
        title: 'Loja Integrada',
        img: lojaintegrada
    }]

    return (
        <div className={styles.skill}>
            <p>My Skills</p>
            <div className={styles.skill__list}>
                <SkillBox title="Front-end" imgs={frontend}/>
                <SkillBox title="Back-end" imgs={backend}/>
                <SkillBox title="Database" imgs={database}/>
            </div>
            <div className={styles.skill__list}>
                <SkillBox title="Tools" imgs={tools}/>
                <SkillBox title="Platforms" imgs={platforms}/>
            </div>
        </div>
    )
}