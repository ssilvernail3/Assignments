const Tweet = (props) => {
    return (
        <ul>
            <li>{ props.username }</li>
            <li>{ props.name }</li>
            <li>{ props.date }</li>
            <li>{ props.message }</li>
        </ul>
    )
}