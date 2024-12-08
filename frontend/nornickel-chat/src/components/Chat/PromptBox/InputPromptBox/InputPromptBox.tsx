import classes from "./InputPromptBox.module.css";

export default function InputPromptBox(props: {
  value: string;
  inputValueHandler: (value: string) => void;
  placeholder: string;
}) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.inputValueHandler(event.target.value);
  };
  return (
    <input
      className={classes.input_container}
      value={props.value}
      onChange={handleInputChange}
      name="input"
      type="text"
      autoComplete="off"
      placeholder={props.placeholder}
    />
  );
}
