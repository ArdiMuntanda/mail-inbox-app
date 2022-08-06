import { useState } from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Inbox() {
    const [isLoading, setLoadingState] = useState(true); 
    const [loadedMessages, setLoadedMessages] = useState([]);

    useEffect(() => {
        setLoadedMessages(true);
        fetch(
            "https://mail-inbox-app-default-rtdb.firebaseio.com/Jim.json"
        ).then(response => {
            return response.json();
        }).then(data => {
            const allMsg= [];
            for (const key in data) {
                const msg = {
                    id: key, 
                    ...data[key]
                };
                allMsg.push(msg);
            }
            setLoadingState(false);
            setLoadedMessages(data);
        });
    }, []);
    
    if (isLoading) {
        return (
            <div className='loader'>
                <img src='/icons/email_loader.gif' alt='loader' />
            </div>
        );
    } else {
        return (
            <div>
                <h2>Messages</h2>
                <div className='message_container'>
                    { loadedMessages.map((message) => { return (<Message propKey={loadedMessages.indexOf(message)} sujet={message.subject} msg={message.content} readStatus={message.isRead} />); 
                        }) } 
                </div>
                <Link className='btn' to='/'>Previous</Link>
            </div>
        );
    }
}

export default Inbox;