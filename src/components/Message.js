import ReadStatusMark from "./ReadStatusMark";
function Message(props) {
    function readMessageHandler() {
        props.see(true);
    }
    function truncate(str, n) {
        return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    };
    return (
        <div className="one_message" onClick={readMessageHandler} >
            <div >
                <h3>{props.sujet}</h3>
                <p>{truncate(props.msg, 20)}</p>
            </div>
            <ReadStatusMark actualReadStatus={props.readStatus} />
            
        </div>
    );
}
export default Message;