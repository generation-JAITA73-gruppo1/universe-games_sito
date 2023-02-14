export interface News {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
  content: string;
  publicationDate: Date;
  authorName: string;
  tags: string[];
  __v: number;
}

export type NewNews = Omit<News, '_id' | '__v'>;

export type newsSkimmed = Omit<
  News,
  | '__v'
  | 'category'
  | 'imageUrl'
  | 'content'
  | 'publicationDate'
  | 'authorName'
  | 'tags'
>;
