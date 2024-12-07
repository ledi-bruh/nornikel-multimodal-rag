import { Message } from "./Message";

export interface ChatHistoryElement {
  name: string;
  messages: Message[];
}
