function ReadStatusMark(props) {
    function setReadMark(status) {
        if (status) {
            return "icons/read.png";
        } else {
            return "icons/nonread.png";
        }
    } 
    return (
        <aside className="marker">
            <img className="status_marker" src={setReadMark(props.actualReadStatus)} alt='read or unread mark' />
        </aside>
    );
}
export default ReadStatusMark;