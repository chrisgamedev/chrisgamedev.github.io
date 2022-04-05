import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Panel from '../components/Panel'
import Row from '../components/Row'

import magniflyer from '../images/magniflyer.png'
import pathofpatterns from '../images/pathofpatterns.png'
import sabotage3d from '../images/sabotage3d.png'
import spacedrift from '../images/spacedrift.png'
import pressurepop from '../images/pressurepop.png'

export default class Home extends Component {
    render() {
        return (
            <div>
                <meta name="google-site-verification" content="ePbC2PpvAIyv_AR6QZP3gd0owtaJS3UOUl2SwO5AP6s" />
                
                <p>This website is a portfolio of all my projects and tutorials made by me (Chris).</p>
                <p>Below is a list of all the apps I have developed and published on Google Play and the Appstore, ranked by my favourite to least favourite!</p>
                <p>Also, check out my <Link to="/tutorials">tutorials</Link></p>

                <Row>
                    <Panel href="/magniflyer" image={magniflyer} title={"Magniflyer"}/>
                    <Panel href="/spacedriftin" image={spacedrift} title={"Space Driftin'"}/>
                    <Panel href="/pathofpatterns" image={pathofpatterns} title={"Path Of Patterns"}/>
                    <Panel href="/pressurepop" image={pressurepop} title={"Pressure Pop"}/>
                </Row>

                <p>More projects to come!</p>
                <p>Interested? Follow me on <a href="https://twitter.com/timeBenter">Twitter</a>.</p>
            </div>
        )
    }
}