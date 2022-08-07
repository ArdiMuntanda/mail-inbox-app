import Counter from './Counter';
import { Link } from 'react-router-dom';
function Welcome(props) {
    return (
        <div>
            <h2>Hello {props.name}</h2>
            { typeof props.numbers === "undefined" ? <div >...</div> : <Counter unread={props.numbers[1]} total={props.numbers[0]} />}

            <Link className='btn' to='/inbox'>View Messages</Link>
        </div>
    );
}

export default Welcome;