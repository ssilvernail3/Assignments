const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Shane" />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));