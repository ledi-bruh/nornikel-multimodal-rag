// import axios from "./helpers/axios";
import { response } from "../mock/response";
import { AnswerModel } from "./baseTypes";

async function getAnswer(prompt: string, topK: number): Promise<AnswerModel> {
  // const response = await axios.get("/predict", {
  //   params: {
  //     prompt: prompt,
  //     topK: topK,
  //   },
  // });
  // const answer = response.data.data;
  return response
}

export { getAnswer };
