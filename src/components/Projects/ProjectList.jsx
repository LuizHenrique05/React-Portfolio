import React, { Component } from 'react'
import Modal from '../layout/Modal/Modal'
import items from './database'
import { FaExternalLinkAlt } from 'react-icons/fa'

import styles from './ProjectList.module.css'

export default class ProjectList extends Component {

    constructor(props){
        super(props)

        this.state = {
            thumb: '',
            title: '',
            description: '',
            github: '',
            heroku: '',
            technology: [],
            display: 'none'
        }
    }

    modalFormation = (item) => {
        this.setState({
            thumb: item.thumb,
            title: item.name,
            description: item.description,
            github: item.github_link,
            heroku: item.heroku_link,
            technology: item.technology,
            display: 'block'
        })
    }

    showModal = show => {
        this.setState({
            thumb: this.state.thumb,
            title: this.state.title,
            description: this.state.description,
            github: this.state.github,
            heroku: this.state.heroku,
            technology: this.state.technology,
            display: show
        })
    }


    render() {
        return (
            <>
                <ul className={styles.list}>
                    {items.map((item)=>(
                        <li key={item.id}>
                            <div>
                                <img src={item.thumb} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <button onClick={e => this.modalFormation(item)}>See More <FaExternalLinkAlt /></button>
                            </div>
                        </li>
                    ))}        
                </ul>
                <div>
                    <Modal  thumb={this.state.thumb}
                            title={this.state.title} 
                            description={this.state.description} 
                            github={this.state.github} 
                            heroku={this.state.heroku} 
                            technology={this.state.technology}
                            display={this.state.display}
                            closeClick={this.showModal} />
                </div>
            </>
        )
    }
}
    