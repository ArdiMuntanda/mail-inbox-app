import Message from './Message';
import { Link } from 'react-router-dom';
const dummyMessages = [
    { 
        "subject": "Hi Again",
        "content": "Just wanted to check on you", 
        "isRead": true 
    },
    { 
        "subject": "Hi Friend", 
        "content": "Just wanted to let you know I’ m good",
        "isRead": false
    }
 ];
function Inbox(props) {
    return (
        <div>
            <h2>Messages</h2>
            <div className='message_container'>
                {
                    dummyMessages.map((message) => {
                        return (
                            <Message sujet={message.subject} msg={message.content} readStatus={message.isRead} />
                        );
                    })}
                
            </div>
            <Link className='btn' to='/'>Previous</Link>
        </div>
    );
}
export default Inbox;