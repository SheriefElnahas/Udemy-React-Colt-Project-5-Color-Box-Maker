import './Box.css';
import React from 'react';

class Box extends React.Component {
    render() {
        const {background, height, width } = this.props;
        return (
            <div className='Box' style={{background: background, height: height, width: width}}></div>
        )
    }
}

export default Box;