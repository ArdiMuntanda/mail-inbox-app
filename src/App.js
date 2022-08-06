import {useState} from 'react';
import MessagesBlock from './components/MessagesBlock.js';
import OpenMessage from './components/OpenMessage.js';
import Welcome from './components/Welcome.js';
function App() {    
  const [seeMessages, setSeeMessages]= useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  return (
    <div className='container'>
      { !seeMessages ? <Welcome name='Ardi' view={setSeeMessages} /> : null}
      { seeMessages && !openMessage ? <MessagesBlock openState={setOpenMessage} backButton={setSeeMessages} /> : null }
      { seeMessages && openMessage ? <OpenMessage sujet='Topic of the Conversation' message='Hello, hope you are doing well.' backButton={setOpenMessage} /> : null }
      
      
    </div>
  );
}

export default App;
