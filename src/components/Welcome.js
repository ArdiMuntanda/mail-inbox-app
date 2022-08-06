import Counter from './Counter';
function Welcome(props) {
  function inBoxHandler() {
    props.view(true);
  }
    return (
        <div>
            <h2>Hello {props.name}</h2>
            <Counter unread='3' read='10' />
            <button className='btn' onClick={inBoxHandler}>View Messages</button>
        </div>
    );
}

export default Welcome;