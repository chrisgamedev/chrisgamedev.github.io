import React, { Component } from 'react';

export default class PrivacyPolicy extends Component {
    render() {
        return (

            <div style = {{ width: "70%", margin: "0 auto", textAlign: "left" }}>                
                <p>
                    This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                </p>

                <h3>Information Collection and Use</h3>
                <p>
                    For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way. The app does use third party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the app: <a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Unity</a>
                </p>

                <h3>Cookies</h3>
                <p>
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

                    This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                </p>

                <h3>Security</h3>
                <p>
                    I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
                </p>

                {/* <!-- https://github.com/nisrulz/app-privacy-policy-generator --> */}

                <br/><br/><br/><br/>
            </div>
        )
    }
}