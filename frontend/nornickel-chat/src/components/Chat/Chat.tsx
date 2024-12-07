import { Message } from "../../types/Message";
import MessageBox from "./MessageBox/MessageBox";
import PromptBox from "./PromptBox/PromptBox";
import classes from './Chat.module.css'


export default function Chat(props: {
  messages: Message[];
  placeholder: string;
  is_active: boolean;
}) {
  return <section className={classes.chat_container}>
    <MessageBox messages={props.messages}/>
    <PromptBox placeholder={props.placeholder} is_active={props.is_active} />
  </section>;
}
