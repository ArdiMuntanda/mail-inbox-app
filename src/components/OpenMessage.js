function OpenMessage(props) {
    return (
        <div className="open_msg">
            <h2>{props.sujet}</h2>
            <p>
                {props.message}
            </p>
            <button className='btn' onClick={function () {props.backButton(false)}}>Previous</button>
        </div>
    );
}
export default OpenMessage;