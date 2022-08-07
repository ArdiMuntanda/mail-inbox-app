import { createContext } from "react";
import { useState } from 'react';
const AllMessagesContext = createContext({
    allfetMessages: [],
    msgNbr: 0
});

function fetchMessages() {
    
}

function MessageContextProvider(props) {
    const [userMessages, setUserMessages] = useState([]);
    const context = {
        allfetMessages: userMessages,
        msgNbr: userMessages.length
    }

    return <AllMessagesContext.Provider value={context}>
        {props.children}
    </AllMessagesContext.Provider>
}