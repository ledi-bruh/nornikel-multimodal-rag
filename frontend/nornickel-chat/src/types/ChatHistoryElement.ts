import { Message } from "./Message";

export interface ChatHistoryElement {
  id: string;
  messages: Message[];
}
