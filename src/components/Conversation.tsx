import '../styles/Conversation.css'

const Conversation = () => {

    type message = {creator:string, receiver:string, text:string, date:string};

    const messArr:message[] = [
        {creator: "test1", receiver:"tester1", text:"ABCD", date:"24-22"},
        {creator: "test2", receiver:"tester2", text:"ABC", date:"21-22"},
        {creator: "test3", receiver:"tester3", text:"ABDCG", date:"25-22"}
    ]

    const test = () => {
        const arr:number[] = [1,2,3];
        //arr.forEach(e) = () => console.log(e);
    }

    //test();

    return (
        <div>
            {messArr[0].text}
        </div>
    )
}

export default Conversation;

