import InputMessageBox from "./InputPromptBox/InputPromptBox";
import MessageButtonBox from "./PromptButtonBox/PromptButtonBox";
import classes from "./PromptBox.module.css";

export default function PromptBox(props: {
  placeholder: string;
  is_active: boolean;
}) {
  return (
    <>
      <div className={classes.bottom}></div>
      <div className={classes.prompt_box_container}>
        <InputMessageBox placeholder={props.placeholder} />
        <MessageButtonBox is_active={props.is_active} />
      </div>
    </>
  );
}
