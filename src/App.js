import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Inbox from './components/Inbox.js';
import OpenMessage from './components/OpenMessage.js';
import TopBar from './components/TopBar.js';
import Welcome from './components/Welcome.js';
import { useState } from 'react';
import { useEffect } from 'react';
function App(props) { 
  
  const [isLoading, setLoadingState] = useState(true); 
    const [loadedMessages, setLoadedMessages] = useState([]);

    useEffect(() => {
        setLoadingState(true);
        fetch(
            "https://mail-inbox-app-default-rtdb.firebaseio.com/Jim.json"
        ).then(response => {
            return response.json();
        }).then(data => {
            const allMsg= [];
            for (const key in data) {
                const msg = {
                    id: key, 
                    ...data[key]
                };
                allMsg.push(msg);
            }
            setLoadingState(false);
            setLoadedMessages(data);
        });
    }, []);
    
    if (isLoading) {
        return (
          <div className='container' >
            <BrowserRouter >
              <TopBar />
              <div className='loader'>
                  <img src='/icons/email_loader.gif' alt='loader' />
              </div>
            </BrowserRouter>
          </div>
        );
    } else {
      return (
        <div className='container'>
          <BrowserRouter >
            <TopBar data={loadedMessages} />
            <Routes >
              <Route path='/' exact={true} element={<Welcome name='Jim'  data={loadedMessages} />} />
              <Route path='/inbox' element={<Inbox data={loadedMessages} />} />
              <Route path='/message/:id' element={<OpenMessage data={loadedMessages}  />} />
            </Routes>
          </BrowserRouter>
        </div>
      );
    }
  
}

export default App;
