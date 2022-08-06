import Counter from './Counter';
import { Link } from 'react-router-dom';
function Welcome(props) {
    return (
        <div>
            <h2>Hello {props.name}</h2>
            <Counter unread='3' read='10' />
            <Link className='btn' to='/inbox'>View Messages</Link>
        </div>
    );
}

export default Welcome;