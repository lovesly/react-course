import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
    }
    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // new class properties, replace binding with arrow func
    handleSubmit = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        event.target.elements.option.value = '';        
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{ this.state.error }</p>}
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" name="option"/>
                    <button>Add Options Yo</button>
                </form>
            </div>
        );
    }
} 