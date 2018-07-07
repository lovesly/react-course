class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options,
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
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
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

IndecisionApp.defaultProps = {
    options: ['Thing one', 'Thing two', 'Thing four']
}

const Header = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            { props.subTitle && <h2>{ props.subTitle }</h2> } 
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision default"
};

// class Header extends React.Component {
//     render() {
//         // this.props     
//         return (
//             <div>
//                 <h1>{ this.props.title }</h1>
//                 <h2>{ this.props.subTitle }</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={ props.handlePick }
                disabled={ !props.hasOptions }
            >
                What should I do?
            </button>
        </div>
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={ this.props.handlePick }
//                     disabled={ !this.props.hasOptions }
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={ props.handleDeleteOptions }>Remove All</button>
            { 
                props.options.map(option =>  <Option key={ option } option={ option }/> )
            }
            <Option />
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            { props.option }
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 { this.props.option }
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined,
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // if (option) {
        //     this.props.handleAddOption(option);
        // }
        this.setState(() => {
            return {
                error,
            }
        });
        event.target.elements.option.value = '';        
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{ this.state.error }</p>}
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