function Counter(props) {
    return (
        <div >
            You have {props.unread} unread messages out of {props.read}
        </div>
    );
}

export default Counter;