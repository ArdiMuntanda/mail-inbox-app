import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Inbox from './components/Inbox.js';
import OpenMessage from './components/OpenMessage.js';
import TopBar from './components/TopBar.js';
import Welcome from './components/Welcome.js';
function App() {    
  return (
    <div className='container'>
      <BrowserRouter >
        <TopBar />
        <Routes >
          <Route path='/' exact={true} element={<Welcome name='Ardi'  />} />
          <Route path='inbox' element={<Inbox   />} />
          <Route path='message' element={<OpenMessage sujet='Topic of the Conversation' message='Hello, hope you are doing well.'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
