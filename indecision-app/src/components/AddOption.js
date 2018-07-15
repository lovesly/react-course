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
                {this.state.error && <p className="add-option-error">{ this.state.error }</p>}
                <form className="add-option" onSubmit={ this.handleSubmit }>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Options Yo</button>
                </form>
            </div>
        );
    }
} 