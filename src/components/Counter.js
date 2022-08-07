//Conmponent to display the count of the unread and total messages
function Counter(props) {
    if (typeof props == 'undefined') {
        return (
        <div >
            ...
        </div>)
    } else {
        return (
            <div >
                You have {props.unread} unread messages out of {props.total}
            </div>
        );
    }
}

export default Counter;