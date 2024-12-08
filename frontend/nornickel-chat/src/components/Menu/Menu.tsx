import clsx from "clsx";
import { ChatHistoryElement } from "../../types/ChatHistoryElement";
import AddButton from "./AddButton/AddButton";
import ChatHistory from "./ChatHistory/ChatHistory";
import classes from "./Menu.module.css";
import logo from "../../assets/icons/Nornickel_logo.svg";

export default function Menu(props: {
  history: ChatHistoryElement[];
  addHistoryOnClick: () => void;
  setNewChatOnClick: (id: string) => void;
}) {
  return (
    <section className={classes.menu_container}>
      <div className={classes.plus_button_container}>
        <img src={logo} className={classes.logo}/>
        <AddButton addHistoryOnClick={props.addHistoryOnClick} />
      </div>
      <div className={classes.menu_history_container}>
        <p className={clsx(classes.menu_text, classes.history_menu_text)}>
          Последние чаты
        </p>
        <ChatHistory
          history={props.history}
          setNewChatOnClick={props.setNewChatOnClick}
        />
      </div>
    </section>
  );
}
