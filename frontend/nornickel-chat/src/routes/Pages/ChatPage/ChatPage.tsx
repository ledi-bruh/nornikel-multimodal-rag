import { useState } from "react";
import ChatTemplate from "../../../components/ChatTemplate/ChatTemplate";
import { messageStore } from "../../../stores";
import { observer } from "mobx-react-lite";
import { history } from "../../../mock/history";

function ChatPage() {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { messageList, getAnswer } = messageStore;

  const inputOnClick = () => {
    if (inputValue !== "") {
      getAnswer(inputValue);
      setInputValue("");
    }
  };

  const addHistoryOnClick = () => {};

  const setNewChatOnClick = () => {};

  return (
    <ChatTemplate
      history={history}
      messages={messageList}
      is_active={isActive}
      hoverHandler={setIsActive}
      inputValueHandler={setInputValue}
      value={inputValue}
      inputOnClick={inputOnClick}
      addHistoryOnClick={addHistoryOnClick}
      setNewChatOnClick={setNewChatOnClick}
    />
  );
}

export default observer(ChatPage);
