import { useState } from 'react'
import '../styles/Chat.css'

function Chat() {
  const [count, setCount] = useState(0) 

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>{count}</button> 
    </div>
  )
}

export default Chat;
