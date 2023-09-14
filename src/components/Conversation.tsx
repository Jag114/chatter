import '../styles/Conversation.css'
import MessageNode from './MessageNode';
export type {Message};

type Message = {creator:string, receiver:string, text:string, date:string};

const Conversation = () => {

    const messArr:Message[] = [
        {creator: "test1", receiver:"tester1", text:"ABCD", date:"24-22"},
        {creator: "test2", receiver:"tester2", text:"ABC", date:"21-22"},
        {creator: "test3", receiver:"tester3", text:"ABDCG", date:"25-22"}
    ]

    return (
        <div>
            {messArr.map((e) => <MessageNode {...e}/>)}
        </div>
    )
}

export default Conversation;

