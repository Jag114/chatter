import ChatBox from './ChatBox';

import messages from "../data/messages.json"

import '../styles/Chat.css'

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
