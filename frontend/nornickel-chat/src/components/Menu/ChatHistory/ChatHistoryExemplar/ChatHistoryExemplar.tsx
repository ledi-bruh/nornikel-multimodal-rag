import { ChatHistoryElement } from "../../../../types/ChatHistoryElement";
import classes from "./ChatHistoryExemplar.module.css";

export default function ChatHistoryExemplar(props: {
  history_element: ChatHistoryElement;
  setNewChatOnClick: (id: string) => void;
}) {
  const switchChatOnClick = () => {
    props.setNewChatOnClick(props.history_element.id);
  };
  return (
    <button className={classes.chat_button} onClick={switchChatOnClick}>
      <p className={classes.chat_button_text}>{props.history_element.messages[0].data.answer}</p>
    </button>
  );
}
