import React, {Component} from 'react'

export default class Button extends Component
{
    constructor(props){
        super(props)
        this.state = {
            text: this.props.text
        }
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.state.text}
            </button>
        )
    }
}