import React, { Component } from 'react';

import ios from '../images/ios.png'
import android from '../images/android.png'

import '../components/css/Showcase.css'

export default class Showcase extends Component {
    render() {
        var data = this.props.data;
        
        return (
            <div className="showcase">

                <div className="showcase-text" style={{ fontFamily:data.font != null ? data.font : undefined }}>
                    <p>{data.caption}</p>
                </div>

                <div className="showcase-img">
                    { data.image && <img src={data.image} alt="App"/> }
                </div>

                <div className="showcase-links">
                    <a href={data.ios}><img src={ios} className="link-img" alt="iOS link"/></a>
                    <a href={data.android}><img src={android} className="link-img" alt="iOS link"/></a>
                </div>
            </div>
        )
    }
}