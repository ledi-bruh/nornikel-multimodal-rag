import { ChatHistoryElement } from "../../types/ChatHistoryElement";
import { Message } from "../../types/Message";
import Chat from "../Chat/Chat";
import Menu from "../Menu/Menu";
import classes from './ChatTemplate.module.css';

export default function ChatTemplate(props: {
  history: ChatHistoryElement[];
  messages: Message[];
  is_active: boolean;
}) {
  return (
    <main className={classes.chat_template_container}>
      <Menu history={props.history} />
      <Chat
        messages={props.messages}
        placeholder={"Сообщить NorChat"}
        is_active={props.is_active}
      />
    </main>
  );
}
