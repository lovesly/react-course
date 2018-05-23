class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={ title } subTitle={ subTitle }/>
                <Action />
                <Options options={ options }/>
                <AddOption />
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
    handlePick() {
        
    }
    render() {
        return (
            <div>
                <button onClick={ this.handlePick }>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {

    }
    render() {
        const options = this.props.options;
        return (
            <div>
                <button onClick={ this.handleRemoveAll }>Remove All</button>
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
    handleSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            console.log(option);
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