import { Message } from "../../../types/Message";
import AIMessage from "./AIMessage/AIMessage";
import classes from "./MessageBox.module.css";
import UserMessage from "./UserMessage/UserMessage";

export default function MessageBox(props: { messages: Message[] }) {
  const messages = props.messages.map((message) => {
    const author = message.author;
    if (author === "user") return <UserMessage message={message} />;
    return <AIMessage message={message} />;
  });

  return <div className={classes.message_container}>{messages}</div>;
}
