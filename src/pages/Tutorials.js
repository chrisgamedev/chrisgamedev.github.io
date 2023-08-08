import React, { Component } from 'react';

import CustomPanel from '../components/CustomPanel'
import Row from '../components/Row'

export default class Tutorials extends Component {
    render() {
        return (
            <div>                
                <p>Check out all of my tutorials! If you find a mistake somewhere, let me know.</p>

                <Row>
                    <CustomPanel href="https://chrisgamedev.github.io/my-tutorials/how-to-develop-a-unity-app-for-ios-on-windows" title={"How to develop a Unity App for iOS on Windows"}/>
                    <CustomPanel href="https://chrisgamedev.github.io/my-tutorials/how-to-make-a-drawing-game-in-unity" title={"How to make a drawing / painting game in Unity"}/>
                </Row>

                <p>More to come!</p>
            </div>
        )
    }
}