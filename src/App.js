import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

import React from 'react'

function App() {
    return (
        <ChatEngine
            height="100vh"
            projectID="40a252cd-7886-402a-862a-a792f24cbc80"
            userName="shek"
            userSecret="abhi1988"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
