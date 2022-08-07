import { Link } from "react-router-dom";
import ReadStatusMark from "./ReadStatusMark";
function Message(props) {
    function truncate(str, n) {
        return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    };
    return (
        <div className="one_message" >
            <div >
                <Link to={'/message/'+ props.propKey } subject={props.sujet} message={props.msg} >
                    <h3>{props.sujet}</h3>
                    <p>{truncate(props.msg, 20)}</p>
                </Link>
            </div>
            <ReadStatusMark actualReadStatus={props.readStatus} />
            
        </div>
    );
}
export default Message;