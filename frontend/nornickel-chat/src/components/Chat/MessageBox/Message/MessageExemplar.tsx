import clsx from "clsx";
import { Message } from "../../../../types/Message";
import classes from "./MessageExemplar.module.css";

export default function MessageExemplar(props: { message: Message }) {
  return (
    <p
      className={clsx(
        classes.message_container,
        props.message.author === "user"
          ? classes.user_message_container
          : classes.ai_message_container
      )}
    >
      {props.message.text}
    </p>
  );
}
