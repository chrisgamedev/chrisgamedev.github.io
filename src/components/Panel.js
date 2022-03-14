import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/Panel.css'

export default class Panel extends Component {
    render() {
        return (
            <div className="panel" style={{ padding: this.props.image != null ? "10px" : "40px" }} alt="Project">
                { this.props.href != null && <a className="link" href={this.props.href}/> }
                { this.props.image != null && <img src={this.props.image} /> }
                <div>{this.props.title}</div>
            </div>
        )
    }
}