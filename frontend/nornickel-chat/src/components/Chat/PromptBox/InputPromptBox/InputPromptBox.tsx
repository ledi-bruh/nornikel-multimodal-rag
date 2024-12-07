import classes from './InputPromptBox.module.css'

export default function InputPromptBox(props: {
  placeholder: string
}
) {
  return <input 
    className={classes.input_container}
    name="input"
    type="text"
    autoComplete='off'
    placeholder={props.placeholder}
  />;
}
