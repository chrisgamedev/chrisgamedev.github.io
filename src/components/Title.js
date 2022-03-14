import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        document.title = this.props.title;
        return (
            <div className="nav">
                <h1 style={{ fontFamily: this.props.font != null ? this.props.font : undefined }}>{this.props.title}</h1>
            </div>
        )
    }
}