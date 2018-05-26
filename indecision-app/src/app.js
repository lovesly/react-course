class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing four'],
        }
    }
    // handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: [],
            }
        });
    }

    handlePick() {
        const randomNum = ~~(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    // array.push not working, because it doesn't return a new array
    // interesting
    handleAddOption(option) {
        this.setState((prevState) => {
            return {
                options: [...prevState.options, option],
            }
        });
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
                />
                <AddOption handleAddOption={ this.handleAddOption }/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        // this.props     
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subTitle }</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={ this.props.handlePick }
                    disabled={ !this.props.hasOptions }
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    // override for this binding
    constructor(props) {
        super(props);
        // this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    // handleRemoveAll() {
    //     // bind could work, but everytime re-render, it will bind again
    //     console.log(this.props.options);
    // }
    render() {
        const options = this.props.options;
        return (
            <div>
                <button onClick={ this.props.handleDeleteOptions }>Remove All</button>
                { 
                    options.map(option =>  <Option key={ option } option={ option }/> )
                }
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                { this.props.option }
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            this.props.handleAddOption(option);
        }
        event.target.elements.option.value = '';        
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" name="option"/>
                    <button>Add Options</button>
                </form>
            </div>
        );
    }
} 

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />d
//         <AddOption />
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));