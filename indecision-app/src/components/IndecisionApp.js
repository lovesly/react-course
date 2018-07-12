import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

class IndecisionApp extends React.Component {
    state = {
        // options: props.options, // props not defined?? then how can we pass in props
        // what I found is, when this line is being executed, there is no props.
        options: [],
    }

    // handleDeleteOptions
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((op) => op !== option)
        }));
    }

    handlePick = () => {
        const randomNum = ~~(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    // array.push not working, because it doesn't return a new array
    // interesting
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    // react component lifecycles
    componentDidMount() {
        try {
            const _data = localStorage.getItem('options');
            const options = JSON.parse(_data);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const _data = JSON.stringify(this.state.options);
            localStorage.setItem('options', _data);
            console.log("saving data");
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmmount");
    }
    
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={ title } subTitle={ subTitle }/>
                <Action 
                    hasOptions={ this.state.options.length > 0 }
                    handlePick={ this.handlePick }
                />
                <Options 
                    options={ this.state.options }
                    handleDeleteOptions={ this.handleDeleteOptions }
                    handleDeleteOption= { this.handleDeleteOption }
                />
                <AddOption handleAddOption={ this.handleAddOption }/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['Thing one', 'Thing two', 'Thing three']
}

export default IndecisionApp;