import { Message } from '../interfaces/Message';
import { useState } from 'react'

import '../styles/ChatBox.css'

function ChatBox(props:Message) {
  const [count, setCount] = useState(0); 
  const {text, author} = props;
  
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  return (
    <div>
      <span> {author} </span>
      <span> {text} </span>
      <button onClick={handleClick}>{count}</button> 
    </div>
  )
}

export default ChatBox;
