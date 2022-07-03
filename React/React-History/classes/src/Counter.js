import React from "react";

class Counter extends React.Component {
    static defaultProps = {color : 'orange'}
    constructor(props) {
        super(props);
        this.state = { count: 0, isHiding: false }; 
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({count : this.state.count + 1})
    }

    decrement() {
        this.setState({count : this.state.count - 1})
    }

    componentDidMount() {
        console.log('COMPONENT MOUNTED!')
    }

    componentDidMount() {
        console.log('UPDATED!')
    }

    render() {
        console.log('COMPONENT RENDERING')
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


export default Counter;