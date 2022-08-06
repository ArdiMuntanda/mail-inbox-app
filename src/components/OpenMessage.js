import { Link } from 'react-router-dom';
function OpenMessage(props) {
    return (
        <div className="open_msg">
            <h2>{props.sujet}</h2>
            <p>
                {props.message}
            </p>
            <Link className='btn' to='/inbox'>Previous</Link>
        </div>
    );
}
export default OpenMessage;