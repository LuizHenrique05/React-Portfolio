import React from 'react'
import SkillBox from '../Skills/SkillBox'

import react from '../../img/skills/reactjs.png'
import js from '../../img/skills/javascript.png'
import html from '../../img/skills/html-5.png'
import css from '../../img/skills/css-3.png'
import stylus from '../../img/skills/stylus.png'

import php from '../../img/skills/php.png'
import nodejs from '../../img/skills/nodejs.png'

import mysql from '../../img/skills/mysql.png'
import mongodb from '../../img/skills/mongodb.png'

import laravel from '../../img/skills/laravel.png'

import github from '../../img/skills/github.png'
import vscode from '../../img/skills/vscode.png'
import phpstorm from '../../img/skills/phpstorm.png'
import cloud9 from '../../img/skills/cloud9.png'
import xampp from '../../img/skills/xampp.png'
import slack from '../../img/skills/slack.png'
import figma from '../../img/skills/figma.png'

import wordpress from '../../img/skills/wordpress.png'
import tray from '../../img/skills/tray.png'
import fbits from '../../img/skills/fbits.png'
import nuvemshop from '../../img/skills/nuvemshop.png'
import lojaintegrada from '../../img/skills/lojaintegrada.png'

import styles from './Skills.module.css'

export default () => {
    const frontend = [
    {
        title: 'ReactJS',
        img: react
    },
    {
        title: 'JavaScript',
        img: js
    },
    {
        title: 'HTML5',
        img: html
    }, 
    {
        title: 'CSS3',
        img: css
    },
    {
        title: 'Stylus',
        img: stylus
    },
    ]
    const backend = [
    {
        title: 'Laravel',
        img: laravel
    },
    {
        title: 'PHP',
        img: php
    }, 
    {
        title: 'NodeJS',
        img: nodejs
    }]
    const database = [
    {
        title: 'MySQL',
        img: mysql
    }, 
    {
        title: 'MongoDB',
        img: mongodb
    }]
    const tools = [
    {
        title: 'Github',
        img: github
    },
    {
        title: 'Visual Studio Code',
        img: vscode
    },
    {
        title: 'PHPStorm',
        img: phpstorm
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
        img: slack
    },
    {
        title: 'Figma',
        img: figma
    }]
    const platforms = [
        {
            title: 'WordPress',
            img: wordpress
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