const App = () => {
    return (
        <div>
            <Tweet username="ssilvernail3" name="Shane" date={new Date().toDateString()} message="Hi there! This is a tweet! 🐥" />
            <Tweet username="arlodex111" name="Arlo" date={new Date().toDateString()} message="Hi there! This isn't a tweet! 🐥" />
            <Tweet username="ssilsss" name="Dexter" date={new Date().toDateString()} message="Hi there !🐥" />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));