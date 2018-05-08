const app = {
    title: 'Visibility Toggle',
    detail: 'These are some details.',
    show: 'Show detail',
    hide: 'Hide detail'
};

let visible = false;

const toggle = () => {
    visible = !visible;
    renderToggle();
};

const appRoot = document.getElementById('app');

const renderToggle = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            <button onClick={ toggle }>{ visible ? app.show : app.hide }</button>
            { visible && <p>{ app.detail }</p> }
        </div>
    );
    ReactDOM.render(template, appRoot);    
}

renderToggle();
