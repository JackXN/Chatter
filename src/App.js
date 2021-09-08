import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';


const projectID = '7b350b1e-4fc6-4fcb-8f15-c51ba1f2e2e5'


function App() {
  return (

<div className='App'>
<ChatEngine 
height='100vh'
projectID={projectID}
userName='tonyadams'
userSecret='123123'
renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
/>
</div>

  );
  
}

export default App;


