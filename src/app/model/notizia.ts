export interface Notizia {
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

export type NewNotizia = Omit<Notizia, '_id' | '__v'>;

export type NotiziaSkimmed = Omit<
  Notizia,
  | '__v'
  | 'category'
  | 'imageUrl'
  | 'content'
  | 'publicationDate'
  | 'authorName'
  | 'tags'
>;
