class ToggleVisible extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false,
        }
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible,
            }
        });
    }

    render() {
        const app = {
            title: 'Visibility Toggle',
            detail: 'These are some details.',
            show: 'Show detail',
            hide: 'Hide detail'
        };
        return (
            <div>
                <h1>{ app.title }</h1>
                <button onClick={ this.handleToggle }>{ this.state.visible ? app.show : app.hide }</button>
                { this.state.visible && <p>{ app.detail }</p> }
            </div>
        );
    }   
}
ReactDOM.render(<ToggleVisible />, document.getElementById('app'));

