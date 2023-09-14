import {Message} from "./Conversation";
import '../styles/MessageNode.css'

const MessageNode = (messData:Message) => {
    const {creator, receiver, text, date} = messData;
    return (
        <div className="message-node">
            <p> From: {creator} </p>
            <p> To: {receiver} </p>
            <p> Sent: {date} </p>
            <p> {text} </p>
        </div>
    )
}

export default MessageNode;