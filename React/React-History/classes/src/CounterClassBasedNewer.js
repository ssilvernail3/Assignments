import React from "react";

class CounterClassBasedNewer extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    };
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    };


    render() {
        const { color } = this.props; 
        const { count } = this.state;
        return (
            <div>
                <h1 style={{ color: color }}>I am Counter</h1>
                <h3>Count : {count}</h3>
                <button onClick={this.increment}>Add 1</button>
                <button onClick={this.decrement}>Subtract 1</button>
            </div>
        )
    }
}


export default CounterClassBasedNewer;