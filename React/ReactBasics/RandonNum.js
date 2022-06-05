const RandonNum = () => {
    const rand = Math.floor(Math.random() * 10) + 1;
    return <h3>{ rand }</h3>
    // return React.createElement('h3', null, rand); These two are exactly the same
}
