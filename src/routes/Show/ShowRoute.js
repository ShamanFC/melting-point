import React, { Component } from 'react'

export default class ShowRoute extends Component {
    render() {
        return (
            <div>
                WELCOME TO SHOW
                <h1>{this.props.match.params.title}</h1>
            </div>
        )
    }
}
