
import '../css/MessageCard.css';
import {motion} from 'framer-motion';

function removeMessage(msg, setMessages) {
   setMessages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(msg);
      return newSet;
    });
}

const hasMessage = (arr, msg) =>
  arr.some(m => m.type === msg.type && m.content === msg.content);

export const addMessage = (msg, setMessages) => {
  let isInSet = false;
  setMessages((prev) => {
    isInSet = hasMessage(Array.from(prev), msg);
    if(isInSet) return prev;
    const newMsgs = new Set(prev);
    newMsgs.add(msg);
    return newMsgs;
  });

  if(isInSet) return;


  // setTimeout(() => {
  //   setMessages((prev) => {
  //     const newSet = new Set(prev);
  //     newSet.delete(msg);
  //     return newSet;
  //   });
  // }, 5000); 
}

function MessageCard({messages, setMessages}){
  return messages && messages.size > 0 ? (
    <div className="message-track">
      {Array.from(messages).map((message, idx) => (
        <motion.div 
          initial={{ x: "105vw" }} // Start offscreen to the left
          animate={{ x: "0%" }} // Move to center
          transition={{ duration: .6}}
          className={"message-card " + message.type}
          key={message.type + message.content}>
          <div className="message">
            <span className="message-icon"></span>
            <button onClick={() => {removeMessage(message, setMessages)}}>&times;</button>
            <div>{message.content}</div>
          </div>
        </motion.div> 
      ))}
    </div>
  ) : null;
};


export default MessageCard;