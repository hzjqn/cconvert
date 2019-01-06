import React, {Component} from 'react';

export default class Card extends Component
{
    constructor(props){
        super(props)
        this.state = {
            label: this.props.label,
            text: this.props.text
        }
    }
    render() {
        return (
            <article className="card">
                <span className="currency-label">
                    {this.state.label}
                </span>
                <span className="amount">
                    {this.state.text}
                </span>
            </article>
        );      
    }
}