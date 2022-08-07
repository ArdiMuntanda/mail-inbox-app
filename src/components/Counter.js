function Counter(props) {
    function countMessages(msgArray) {
        const result = {
        total: msgArray.length,
        unread: 0
        };
        for (let i = 0; i < result.total; i++) {
            if (props.msgData[i].isRead === false) {
                result.unread += 1;
            }
        }
        return result;
    }
    return (
        <div >
            You have {countMessages(props.msgData).unread} unread messages out of {countMessages(props.msgData).total}
        </div>
    );
}

export default Counter;