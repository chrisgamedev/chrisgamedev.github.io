import React, { Component } from 'react';
import './css/Footer.css'
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>
                    <a href="mailto:chris.gamedev0@gmail.com?subject=Issue Report&body=Please provide a detailed report of your issue." className="fa fa-envelope"></a>
                </p>
            </div>
        )
    }
}