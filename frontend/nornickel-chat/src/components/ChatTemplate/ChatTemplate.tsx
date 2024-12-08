import { ChatHistoryElement } from "../../types/ChatHistoryElement";
import { Message } from "../../types/Message";
import Chat from "../Chat/Chat";
import Menu from "../Menu/Menu";
import classes from "./ChatTemplate.module.css";

export default function ChatTemplate(props: {
  value: string;
  history: ChatHistoryElement[];
  messages: Message[];
  is_active: boolean;
  hoverHandler: (flag: boolean) => void;
  inputOnClick: () => void;
  inputValueHandler: (value: string) => void;
  addHistoryOnClick: () => void;
  setNewChatOnClick: (id: string) => void;
}) {
  return (
    <main className={classes.chat_template_container}>
      <Menu
        addHistoryOnClick={props.addHistoryOnClick}
        history={props.history}
        setNewChatOnClick={props.setNewChatOnClick}
      />
      <Chat
        messages={props.messages}
        placeholder={"Сообщить NorChat"}
        is_active={props.is_active}
        hoverHandler={props.hoverHandler}
        inputOnClick={props.inputOnClick}
        value={props.value}
        inputValueHandler={props.inputValueHandler}
      />
    </main>
  );
}
