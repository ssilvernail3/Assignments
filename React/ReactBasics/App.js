const App = () => {
    return (
        <div>
            {/* <Shiba />
            <Sharpei /> 
            <Shiba /> */}
            <Animal name="Stevie Chicks" species="Silky Chicken" emoji="🐔" />
            <Animal name="Patrick" species="Red Fox" emoji="🦊" />
            <RandonNum />
            <RandonNum />
            <RandonNum />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));