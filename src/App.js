import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Inbox from './components/Inbox.js';
import OpenMessage from './components/OpenMessage.js';
import TopBar from './components/TopBar.js';
import Welcome from './components/Welcome.js';
import { useState } from 'react';
import { useEffect } from 'react';
function App() { 
 //fetch the messages from the database  
  const [isLoading, setLoadingState] = useState(true); 
  const [loadedMessages, setLoadedMessages] = useState([]);
  const [count, setCount] = useState([0,0]);
    useEffect(() => {
      // useEffect to limit the execution of the fetch instruction
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
        }).catch((error)=>{
          alert("An error occured. " + error);
        });

    }, []);

//calculate the number of unread messages
    useEffect(() => {
      const n = loadedMessages.length;
        setCount([n,0]);
      let unreadNbr = 0;
        loadedMessages.forEach(element => {
            if (element.isRead === false) {
              unreadNbr++;
            } 
        });
        setCount([n,unreadNbr]);
    }, [loadedMessages]);

    if (isLoading) {
      // display a loader while the data is being fetch from the database
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
            <TopBar user='Jim' data={loadedMessages} numbers={count} />
            <Routes >
              <Route path='/' exact={true} element={<Welcome name='Jim'  numbers={count} />} />  
              <Route path='/inbox' element={<Inbox data={loadedMessages}  />} />
              <Route path='/message/:id' element={<OpenMessage data={loadedMessages} currentCount={count} updateCount={setCount} />} />
            </Routes>
          </BrowserRouter>
        </div>
      );
    }
}

export default App;
