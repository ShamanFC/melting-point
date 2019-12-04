import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class HomeRoute extends Component {
    render() {
        return (
            <div>
                <div className='navTotm'>
                    <div className='navElement'><Link to='/about'>about</Link></div>
                    <div className='navElement'><Link to='/artist'>artists</Link></div>
                    <div className='navElement'><Link to='/show'>shows</Link></div>
                </div>
            </div>
        )
    }
}
