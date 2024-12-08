import classes from "./PromptButtonBox.module.css";
import clip from "../../../../assets/icons/paperclip-solid.svg";
import input_on from "../../../../assets/icons/circle-chevron-right-solid-on.svg";
import input_off from "../../../../assets/icons/circle-chevron-right-solid-off.svg";

export default function PromptButtonBox(props: {
  is_active: boolean;
  hoverHandler: (flag: boolean) => void;
  inputOnClick: () => void;
}) {
  const handleMouseEnter = () => {
    props.hoverHandler(true);
  };

  const handleMouseLeave = () => {
    props.hoverHandler(false);
  };

  return (
    <div className={classes.buttons_container}>
      <button className={classes.button_container_clip}>
        <img src={clip} className={classes.button_clip} />
      </button>
      <button
        className={classes.button_container_input}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={props.inputOnClick}
      >
        <img
          src={props.is_active ? input_on : input_off}
          className={classes.button_input}
        />
      </button>
    </div>
  );
}
