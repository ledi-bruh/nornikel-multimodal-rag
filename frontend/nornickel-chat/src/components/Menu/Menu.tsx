import clsx from "clsx";
import { ChatHistoryElement } from "../../types/ChatHistoryElement";
import AddButton from "./AddButton/AddButton";
import ChatHistory from "./ChatHistory/ChatHistory";
import classes from "./Menu.module.css";

export default function Menu(props: { history: ChatHistoryElement[] }) {
  return (
    <section className={classes.menu_container}>
      {/* <SettingLink /> */}
      <div className={classes.plus_button_container}>
        <AddButton />
        <p className={classes.menu_text}>Создать новый чат</p>
      </div>
      <div className={classes.menu_history_container}>
        <p className={clsx(classes.menu_text, classes.history_menu_text)}>Последние чаты</p>
        <ChatHistory history={props.history} />
      </div>
    </section>
  );
}
