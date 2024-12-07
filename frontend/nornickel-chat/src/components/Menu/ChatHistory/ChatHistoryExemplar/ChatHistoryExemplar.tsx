import { ChatHistoryElement } from "../../../../types/ChatHistoryElement";
import classes from './ChatHistoryExemplar.module.css';

export default function ChatHistoryExemplar(props: {
  history_element: ChatHistoryElement;
}) {
  return (
    <button className={classes.chat_button}>
      <p className={classes.chat_button_text}>{props.history_element.name}</p>
    </button>
  );
}
