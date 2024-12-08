import { Message } from "../../../../types/Message";
import classes from "./UserMessage.module.css";

export default function UserMessage(props: { message: Message }) {
  return (
    <div className={classes.user_message_container}>
      <p className={classes.user_message_text}>{props.message.data.answer}</p>
    </div>
  );
}
