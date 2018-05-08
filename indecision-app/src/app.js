console.log('App.js is running');

// JSX - JavaScript XML
const app = {
    title: 'This is JSX from app.js!',
    subTitle: 'This is come info',
    options: ['one', 'two', 'three'],
}
const template = (
    <div>
        <h1>{ app.title }</h1>
        { app.subTitle && <p>{app.subTitle}</p> }
        <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No options' }</p> 
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

let count = 0;
const someId = 'someId';
const addOne = () => {
    count++;
    // in this way, looks like everytime clicking the btn you are creating a new template
    // virtual dom? not re-rendering everything
    // diff -> only changed parts.
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();    
}
const reset = () => {
    count = 0;
    renderCounterApp();    
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: { count }</h1>
            <button id={someId} className="button" onClick={ addOne }>+1</button>
            <button className="button" onClick={ minusOne }>-1</button>
            <button className="button" onClick={ reset }>reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);    
};

renderCounterApp();