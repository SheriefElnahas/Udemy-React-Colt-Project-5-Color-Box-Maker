import React from 'react';

class NewBoxForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {height: '', width: '', background: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState(({
            [event.target.name] : event.target.value
        }))
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewBox(this.state.background, this.state.width, this.state.height);
        this.setState({height: '', width: '', background: ''});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Height : </label>
                <input type="text" name="height" value={this.state.height} onChange={this.handleChange}/>
                <label> Width : </label>
                <input type="text" name="width" value={this.state.width} onChange={this.handleChange}/>
                <label> Background : </label>
                <input type="text" name="background" value={this.state.background} onChange={this.handleChange}/>
                <button>Add A New Box</button>
            </form>
        )
    }
}

export default NewBoxForm;