import React, { Component } from 'react';
import './Box.css';


class Box extends Component {

    static defaultProps = {
        defaultBgColor: '#61dafb'
      };


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.props.removeBox(this.props.keyProp);
    }


    render() {

        const boxStyles = {
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: `${this.props.bgColor ? this.props.bgColor : this.props.defaultBgColor}`
        }

        return (
            <div className='Box'>
                <div className='Box-Custom' style={boxStyles}></div>
                <button onClick={this.handleClick}>Remove</button>
            </div>
        )
    }
};

export default Box;


