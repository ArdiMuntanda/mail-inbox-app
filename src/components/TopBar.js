import Counter from "./Counter";
import { Link } from 'react-router-dom';
function TopBar(props) {
    return (
        <header className="top_bar">
            <div className="user_block">
                <Link to='/' >
                    <img src='/icons/avatar.png' alt='avatar' className="avatar" />
                    <h2>Ardi</h2>
                </Link>
            </div>
            <Link to='/inbox'>
                <Counter msgData={props.data} />
            </Link>
        </header>
    );
}
export default TopBar; 