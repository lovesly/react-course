
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            { props.children }
            <p>footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);

// normal way
ReactDOM.render(<Layout content={ template }/>, document.getElementById('app'));

// inline way to pass in jsx
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
), document.getElementById('app'));