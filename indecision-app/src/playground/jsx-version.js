console.log('App.js is running');

// JSX - JavaScript XML
const app = {
    title: 'This is JSX from app.js!å∂',
    subTitle: 'This is come info',
    options: [],
};

const onFormSubmit = (event) => {
    // event is a proxy here
    // contains a SyntheticEvent target
    // interesting
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderList();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderList();
};

const onMakeDecision = () => {
    const randomNum = ~~(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    // console.log(randomNum);
};

const appRoot = document.getElementById('app');

const renderList = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subTitle && <p>{app.subTitle}</p> }
            <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No options' }</p> 
            <button disabled={ app.options.length===0 } onClick={ onMakeDecision }>What should I do?</button>
            <button onClick={ onRemoveAll }>Remove all</button>
            <ol>
                {
                    app.options.map(option => {
                        return <li key={ option }>Item: { option }</li>
                    })
                }
            </ol>
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option"/>
                <button>Add</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderList();

// {
//     [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
// }