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