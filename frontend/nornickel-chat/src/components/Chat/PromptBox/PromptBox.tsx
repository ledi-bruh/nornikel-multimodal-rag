import InputMessageBox from "./InputPromptBox/InputPromptBox";
import MessageButtonBox from "./PromptButtonBox/PromptButtonBox";
import classes from "./PromptBox.module.css";

export default function PromptBox(props: {
  value: string;
  placeholder: string;
  is_active: boolean;
  hoverHandler: (flag: boolean) => void;
  inputOnClick: () => void;
  inputValueHandler: (value: string) => void;
}) {
  return (
    <>
      <div className={classes.bottom}></div>
      <div className={classes.prompt_box_container}>
        <InputMessageBox placeholder={props.placeholder} value={props.value} inputValueHandler={props.inputValueHandler}/>
        <MessageButtonBox is_active={props.is_active} hoverHandler={props.hoverHandler} inputOnClick={props.inputOnClick}/>
      </div>
    </>
  );
}
