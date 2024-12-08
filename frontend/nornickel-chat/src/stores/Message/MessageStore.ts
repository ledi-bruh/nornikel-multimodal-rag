import { action, makeObservable, observable, runInAction } from "mobx";
import { Message } from "../../types/Message";
import api from "../../api";

class MessageStore {
  topK: number = 3;
  messageList: Message[] = [];
  loading: boolean = false;

  constructor() {
    makeObservable(this, {
      topK: observable,
      messageList: observable,
      loading: observable,
      getAnswer: action.bound,
    });
  }

  appendMessage = (message: Message) => {
    this.messageList = [...this.messageList, message];
  };

  async getAnswer(prompt: string): Promise<void> {
    try {
      this.loading = true;
      this.appendMessage({
        data: {
          answer: prompt,
          documents: []
        },
        author: "user",
      });
      const answer = await api.getAnswer(prompt, this.topK);
      runInAction(() => {
        this.appendMessage({
          data: answer,
          author: "ai",
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

const messageStore = new MessageStore();

export { messageStore };
