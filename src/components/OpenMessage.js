import { Link, useParams } from 'react-router-dom';
import {db} from '../firebase-config';
import { getDatabase, ref, set, child, update } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js';
function OpenMessage(props) {
    const id = parseInt(useParams().id);
    if (!props.data[id].isRead) {
        update(ref(db, "/Jim/" + id), {
            isRead: true
        })
    
    }
    return (
        <div className="open_msg">
            <h2>{props.data[id].subject}</h2>
            <p>
                {props.data[id].content}
            </p>
            <Link className='btn' to='/inbox'>Previous</Link>
        </div>
    );
}
export default OpenMessage;