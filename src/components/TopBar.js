import Counter from "./Counter";
import { Link } from 'react-router-dom';
function TopBar(props) {
    // calculate the number of unrea messages and the total
    return (
        <header className="top_bar">
            <div className="user_block">
                <Link to='/' >
                    <img src='/icons/avatar.png' alt='avatar' className="avatar" />
                    <h2>{props.user}</h2>
                </Link>
            </div>
            <Link to='/inbox'>
                { typeof props.numbers === "undefined" ? <div >...</div> : <Counter unread={props.numbers[1]} total={props.numbers[0]} />}
            </Link>
            </header>
        );
}
export default TopBar; 