import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import styles from './Timeline.module.css'

export default () => {
    const [value, setValue] = useState(0)
    const [previous, setPrevious] = useState(0)
    const [display, setDisplay] = useState('block')
    const [opacity, setOpacity] = useState('1')

    const VALUES = ["2017-01-1", "2017-07-1", "2020-01-1", '2020-03-1', '2020-12-31']
    const description = [
        'Starting at University - UNIVEM',
        'Starting 1st job as Support Analyst - BUILDERALL',
        'Start 2nd job as Computer Technician - ITSCOMMERCE',
        'Start current job as Web Developer - EFICAZ MARKETING',
        "Getting a bachelor's degree in Computer Science"
    ]

    function toggleTimeline() {
        if (display === 'none') {
            setDisplay('block')
            toggleOpacity('1')
        }
            
        
        if (display === 'block') {
            toggleOpacity('0')
            setTimeout(() => {
                setDisplay('none')
            }, 400)
        }   
    }

    function toggleOpacity(opacity){
        setTimeout(() => {
            setOpacity(opacity)
        }, 100)
    }

    return (
        <div className={styles.timeline}>
            <p className={styles.title} onClick={toggleTimeline}>My Timeline { display == 'block' ? ( <FaAngleUp /> ) : ( <FaAngleDown /> )}</p>
            <div className="timeline__content" style={{ transition: 'all ease 0.4s', display: display, opacity: opacity }}>
                <HorizontalTimeline styles={{ outline: "#DFA867", foreground: "#293544" }}
                index={value}
                indexClick={(index) => { 
                    setValue(index) 
                    setPrevious(value)
                }}
                values={VALUES}
                />

                <div className={styles.description}>
                    <p>{description[value]}</p>
                </div>
            </div>
        </div>
      );
}