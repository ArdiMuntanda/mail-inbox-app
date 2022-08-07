// Displays the list of all the messages fetched from the database
import Message from './Message';
import { Link } from 'react-router-dom';
function Inbox(props) {
    
    return (
        <div>
            <h2>Messages</h2>
            <div className='message_container'>
                { props.data.map((message) => { return (<Message propKey={props.data.indexOf(message)} sujet={message.subject} msg={message.content} readStatus={message.isRead} />); 
                    }) } 
            </div>
            <Link className='btn' to='/'>Previous</Link>
        </div>
    )
}

export default Inbox;