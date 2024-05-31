export type ChatGenerationOutputDto = {
  id: string;
  source: ChatGenerationSource;
  response: string;
  createdAt: Date;
};

export enum ChatGenerationSource {
  OPEN_AI = "OPEN_AI",
}
