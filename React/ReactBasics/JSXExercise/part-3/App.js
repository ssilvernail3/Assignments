const App = () => {
    return (
        <div>
            <Person name="Dexter" age={5} hobbies={['skiing', 'surfing', 'hiking'] }/>
            <Person name="Arlo" age={88} hobbies={['reading', 'surfing', 'sleeping'] }/>
            <Person name="Dexter" age={18} hobbies={['skiing', 'surfing', 'hiking'] }/>
        </div>
        
    )
}


ReactDOM.render(<App />, document.getElementById('root'));