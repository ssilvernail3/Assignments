const App = () => {
    return (
        <div>
            {/* <Shiba />
            <Sharpei /> 
            <Shiba /> */}
            <Alert>
                <h1>Hello!</h1>
            </Alert>
                <RandomChoice choices={['red', 'yellow', 'green']} />
                <RandomNumRange min={20} max={30} />
                <RandomNumRange />
            <Animal
                name="Stevie Chicks"
                species="Silky Chicken"
                emoji="🐔"
                isCute={true} />

            {/* <Animal
                name="Stevie Chicks"
                species="Silky Chicken"
                emoji="🐔"
                isCute <------- this is will read as TRUE and if you leave it off on another instance of Animal it will read as UNDEFINED
                /> */}
         

            <Animal name="Patrick" species="Red Fox" emoji="🦊" isCute={false} />
            
            <RandonNum />
            <RandonNum />
            <RandonNum />
            <Bouncer age={19} />
            <Bouncer age={17} />
            <Bouncer age={22} />
            <TodoList todos={['walk chickens', 'feed dexter', 'go to gym']} />
            
        </div>
    );
};











ReactDOM.render(<App />, document.getElementById('root'));