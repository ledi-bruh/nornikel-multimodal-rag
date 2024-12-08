import axios from "./helpers/axios";
import { AnswerModel } from "./baseTypes";

async function getAnswer(query: string, top_k: number): Promise<AnswerModel> {
  const response = await axios.post("/answer", null, {
    params: {
      query: query,
      top_k: top_k,
    },
  });
  const answer = response.data;
  return answer;
}

export { getAnswer };
