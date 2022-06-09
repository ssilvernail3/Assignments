import React from "react";

function FixedComponent(props) {
    return (
        <div>
            <p>Hello! I am a FixedComponent!</p>
            <p>Here are some numbers: </p>
            <p>{ props.favNum }</p>
            <p>{ props.favNum + 1}</p>
            <p>{ props.favNum + 2}</p>
            <p>{ props.favNum + 3}</p>
        </div>
    )
}

FixedComponent.defaultProps = {
    favNum: 42
};

export default FixedComponent