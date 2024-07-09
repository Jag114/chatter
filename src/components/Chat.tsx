import '../styles/Chat.css'
import ChatBox from './ChatBox';
import messages from "../data/messages.json"

function Chat() {

  const MessageList = messages.map(m => {
    return (
      <ChatBox text={m.text} author={m.author}></ChatBox>
    )
  })

  return (
    <div>
      {MessageList}
    </div>
  )
}

export default Chat;
