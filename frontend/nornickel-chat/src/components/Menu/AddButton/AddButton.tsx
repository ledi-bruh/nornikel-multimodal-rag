import plus from "../../../assets/icons/circle-plus-solid.svg";
import classes from './AddButton.module.css';

export default function AddButton() {
  return (
    <button className={classes.plus_button}>
      <img className={classes.plus_image} src={plus} />
    </button>
  );
}
