// import { useState } from "react";
import ChatTemplate from "../../../components/ChatTemplate/ChatTemplate";
import { history } from "../../../mock/history";
import { messages } from "../../../mock/messages";

function ChatPage() {
//   const { isActive, setIsActive } = useState(false);
  return (
    <ChatTemplate history={history} messages={messages} is_active={false} />
  );
}

export default ChatPage;
