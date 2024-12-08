interface DocumentMetadataModel {
  source: string;
  page: number;
  image: string;
}

interface DocumentModel {
  id: string;
  score: number;
  metadata: DocumentMetadataModel;
}

export interface AnswerModel {
  documents: DocumentModel[];
  answer: string;
}
