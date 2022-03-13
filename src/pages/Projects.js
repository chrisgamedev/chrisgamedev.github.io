import React, { Component } from 'react';

import Panel from '../components/Panel'
import Row from '../components/Row'

import magniflyer from '../images/magniflyer.png'
import pathofpatterns from '../images/pathofpatterns.png'
import sabotage3d from '../images/sabotage3d.png'
import spacedrift from '../images/spacedrift.png'
import rescuetheplanet from '../images/rescuetheplanet.png'
import raycaster from '../images/raycaster.png'

export default class Projects extends Component {
    render() {
        return (
            <div>                
                <p>This page is a showcase of the games/cool things that I have made. <br/>All of them are made by me (Chris). </p>

                <Row>
                    <Panel href="/magniflyer" image={magniflyer} title={"Magniflyer"}/>
                    <Panel href="/sabotage3d" image={sabotage3d} title={"Sabotage 3D"}/>
                    <Panel href="/pathofpatterns" image={pathofpatterns} title={"Path Of Patterns"}/>
                </Row>

                <Row>
                    <Panel href="/spacedriftin" image={spacedrift} title={"Space Driftin'"}/>
                    <Panel href="/rescuetheplanet" image={rescuetheplanet} title={"RescueThePlanet"}/>
                    <Panel href="/javascript-raycaster" image={raycaster} title={"Raycaster"}/>
                </Row>
            </div>
        )
    }
}