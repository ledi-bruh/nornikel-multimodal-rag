import { ChatHistoryElement } from "../../../types/ChatHistoryElement";
import ChatHistoryExemplar from "./ChatHistoryExemplar/ChatHistoryExemplar";
import classes from "./ChatHistory.module.css";

export default function ChatHistory(props: {
  history: ChatHistoryElement[];
  setNewChatOnClick: (id: string) => void;
}) {
  const elements = props.history.map((elem) => (
    <ChatHistoryExemplar
      history_element={elem}
      setNewChatOnClick={props.setNewChatOnClick}
    />
  ));
  return <div className={classes.history_list_container}>{elements}</div>;
}
