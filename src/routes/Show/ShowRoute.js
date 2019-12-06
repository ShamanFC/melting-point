import React, { Component } from 'react'
import Logo from '../../assets/logo-w-bg.png';
import fourtyFive from  '../../assets/45.png';

export default class ShowRoute extends Component {
    render() {
        return (
            <div>
                <div className='contentContainer'>
                    <div className='titleBar'>
                        <div className='title'>
                            {/* {this.props.match.params.title} */}
                            T.E.S.T.
                        </div>
                    </div>

                    <div className='contentBody'>
                        <img className='showImage' src={Logo}/>
                        <div className='infoBox'>
                            <div className='date'><strong>12 - 31 - 2019</strong></div>
                            <div className='textFormat'>123 south st. brooklyn, NY 69696</div>
                            <div className='date date2'>10 PM - 20 USD</div>
                        </div>

                        <div className='lineup'>
                        dj testName, dj testName, dj testName,  dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj testName, dj zzz, 
                            </div>

                        <img className='fourtyFive' src={fourtyFive}/>
                    </div>

                   
                </div>
            </div>
        )
    }
}
