export interface Content {
  description?: string;
  title?: string;
  news: string[] | CommonContent[];
}

export interface UserContent {
  page: number;
  limit: number;
}

export interface CommonContent {
  text: string;
  url?: string;
  ignore?: boolean;
  _id?: string;
}

export interface docs {
  intro: CommonContent;
  end: CommonContent;
  _id: string;
  news: CommonContent[];
  fps: number;
  title: string;
  description: string;
  date: string;
  __v: number;
  fullDuration: number;
  height: number;
  width: number;
}

export interface ContentResponse {
  docs: docs[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  offset: number;
  page: number;
  pagingCounter: number;
  totalDocs: number;
  totalPages: number;
}

export interface Query {
  id: string;
  type: string;
  upload: string;
}