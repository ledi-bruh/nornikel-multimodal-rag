import { ChatHistoryElement } from "../../../types/ChatHistoryElement";
import ChatHistoryExemplar from "./ChatHistoryExemplar/ChatHistoryExemplar";
import classes from './ChatHistory.module.css';

export default function ChatHistory(props: { history: ChatHistoryElement[] }) {
  const elements = props.history.map((elem) => (
    <ChatHistoryExemplar history_element={elem} />
  ));
  return <div className={classes.history_list_container}>{elements}</div>;
}
