import { AnswerModel } from "../api/baseTypes";

export interface Message {
  data: AnswerModel;
  author: string;
}
