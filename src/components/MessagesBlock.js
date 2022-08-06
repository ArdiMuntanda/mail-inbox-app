import Message from './Message';
function MessagesBlock(props) {
    return (
        <div>
            <h2>Messages</h2>
            <div className='message_container'>
                <Message sujet='Grettings' msg='Hello, hope you are doing well.' readStatus={true} see={props.openState} />
                <Message sujet='Topic of the Conversation' msg='Hello, hope you are doing well.' readStatus={false} see={props.openState} />
                <Message sujet='Good bye' msg='Hello, hope you are doing well.' readStatus={true} see={props.openState} />
            </div>
            <button className='btn' onClick={function () {props.backButton(false)}}>Previous</button>
        </div>
    );
}
export default MessagesBlock;