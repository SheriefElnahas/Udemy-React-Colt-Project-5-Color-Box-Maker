import './BoxList.css'
import React from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {background: 'orange', width: '300px', height: '300px'}
        this.createNewBox = this.createNewBox.bind(this);
    }

    createNewBox(color, width, height) {
        this.setState({
            background: color, width : width, height: height
        })
    }

    render() {
        return (
            <div className='BoxList'>
                < NewBoxForm createNewBox={this.createNewBox} />
                < Box background={this.state.background} width={this.state.width} height={this.state.height}/>
            </div>
        )
    }
}

export default BoxList;