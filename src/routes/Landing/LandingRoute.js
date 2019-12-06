import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-w-bg.png'

export default class LandingRoute extends Component {

    render() {
        return (
            <div>
                <div className='logo-container'><img className='logoSpinner rotate'src={Logo} /></div>
                <div className='landingEnterBtn'><Link to='/show'>NYE 2020</Link></div>
            </div>
        )
    }
}
