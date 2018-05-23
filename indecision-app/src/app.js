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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        const options = this.props.options;
        return (
            <div>
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
    render() {
        return (
            <div>
                AddOption component here;
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