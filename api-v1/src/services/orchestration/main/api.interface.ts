export interface OrchestrationApi {
  CreateChapter: (params: any) => Promise<any>;
  CreateStory: (params: any) => Promise<any>;
  DeleteChapter: (params: any) => Promise<any>;
  DeleteStory: (params: any) => Promise<any>;
  GetChapter: (params: any) => Promise<any>;
  GetStory: (params: any) => Promise<any>;
  ReactToStory: (params: any) => Promise<any>;
  SearchStories: (params: any) => Promise<any>;
  UpdateChapter: (params: any) => Promise<any>;
  UpdateStory: (params: any) => Promise<any>;
}
