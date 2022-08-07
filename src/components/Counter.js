function Counter(props) {
    const result = {
        total: 0,
        unread: 0
    };
    for (let i = 0; i < result.total; i++) {
        if (props.msgData[i].isRead === false) {
            result.unread += 1;
        }
    }
    return (
        <div >
            You have {result.unread} unread messages out of {result.total}
        </div>
    );
}

export default Counter;