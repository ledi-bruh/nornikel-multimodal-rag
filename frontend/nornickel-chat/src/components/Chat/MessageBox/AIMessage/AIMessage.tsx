import clsx from "clsx";
import { Message } from "../../../../types/Message";
import classes from "./AIMessage.module.css";

export default function AIMessage(props: { message: Message }) {
  const answer = props.message.data.answer;
  const documents = props.message.data.documents;

  const stats = documents.map((document, index) => (
    <li className={classes.point_container}>
      <h2 className={clsx(classes.ai_answer_text, classes.h3_header)}>
        {index + 1}. Изображение {document.id}
      </h2>
      <p className={clsx(classes.ai_answer_text, classes.img_description)}>
        Изображение отвечает на запрос с уверенностью {document.score}.
      </p>
      <p className={clsx(classes.ai_answer_text, classes.img_description)}>
        Источник: {document.metadata.source}, страница {document.metadata.page}.
      </p>
      <img src={`data:image/jpeg;base64,${document.metadata.image}`} className={classes.ai_answer_img} />
    </li>
  ));

  return (
    <div className={classes.ai_message_container}>
      <p className={clsx(classes.ai_answer_text, classes.ai_answer_main_text)}>
        {answer}
      </p>
      <h1 className={clsx(classes.ai_answer_text, classes.h2_header)}>
        Характеристика изображений:
      </h1>
      <ul className={classes.list_container}>{stats}</ul>
    </div>
  );
}
