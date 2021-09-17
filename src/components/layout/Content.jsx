import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Projects from '../pages/Projects'
import Recommendations from '../pages/Recommendations'
import Articles from '../pages/Articles'
import Skills from '../pages/Skills'

import About from './About'
import styles from './Content.module.css'
import Navbar from './Navbar'
import Timeline from './Timeline.jsx'
import Container from './Container.jsx'

export default () => 
    <section className={styles.content}>
        <Container>
            <About />
            <Timeline />
        </Container>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/"> 
                    <Recommendations />
                </Route>
                <Route path="/my-skills">
                    <Skills />
                </Route>
                <Route path="/my-projects">
                    <Projects/>
                </Route>
                <Route path="/my-articles">
                    <Articles />
                </Route>
            </Switch>
        </Router>
    </section>
    