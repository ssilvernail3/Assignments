
// Can destructure props to clean up code and can give default values if we dont pass any into our Component 

const RandomNumRange = ({ min = 1, max = 10 }) => {
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return <h1>Rand is : { rand }</h1>
    
}

