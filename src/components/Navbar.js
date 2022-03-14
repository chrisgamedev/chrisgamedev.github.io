import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/Navbar.css'

export default class Navbar extends Component {
    render() {
        var navData = [
            {
                name: "gamedevchris",
                link: "/"
            },
            {
                name: "Projects",
                link: "/projects"
            },
            {
                name: "Tutorials",
                link: "/tutorials"
            }
        ];

        navData = navData.map((data, i) => {
            return <li key={i}><Link className={this.props.active === (i + 1) ? "highlighted" : undefined} to={data.link}>{data.name}</Link></li>
        });

        return (
            <div className="nav">
                <ul>
                    {navData}
                </ul>
            </div>
        )
    }
}