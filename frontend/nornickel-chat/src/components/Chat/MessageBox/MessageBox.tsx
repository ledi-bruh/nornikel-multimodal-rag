import { Message } from "../../../types/Message";
import MessageExemplar from "./Message/MessageExemplar";
import classes from './MessageBox.module.css'

export default function MessageBox(props: { messages: Message[] }) {
  const messages = props.messages.map((message) => <MessageExemplar message={message} />
  );

  return <div className={classes.message_container}>{messages}</div>;
}
