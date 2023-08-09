import React, { Component } from 'react';

import Panel from '../components/Panel'
import CustomPanel from '../components/CustomPanel'
import Row from '../components/Row'

import magniflyer from '../images/magniflyer.png'
import pathofpatterns from '../images/pathofpatterns.png'
import sabotage3d from '../images/sabotage3d.png'
import pressurepop from '../images/pressurepop.png'
import spacedrift from '../images/spacedrift.png'
import rescuetheplanet from '../images/rescuetheplanet.png'
import raycaster from '../images/raycaster.png'
import youtubetomp3 from '../images/youtube-to-mp3.png'

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
                    <Panel href="/pressurepop" image={pressurepop} title={"Pressure Pop"}/>
                    <Panel href="https://chrisgamedev.github.io/rescuetheplanet/webversion/" image={rescuetheplanet} title={"RescueThePlanet"}/>
                </Row>

                <Row>
                    <CustomPanel href="https://chrisgamedev.github.io/javascript-raycaster/" image={raycaster} title={"Raycaster"}/>
                    {/* <Panel href="https://github.com/chrisgamedev/multiple-youtube-links-to-mp3" image={youtubetomp3} title={"Youtube To Mp3"}/> */}
                </Row>
            </div>
        )
    }
}