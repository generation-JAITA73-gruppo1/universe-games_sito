import { ReviewedGame } from './recensione';

export interface Selezione {
  categories: boolean;
  newsAuthorName: boolean;
  reviewerName: boolean;
  tag: boolean;
  reviewedGame: boolean;
}

export interface ChosenFilter {
  categories: string | null;
  newsAuthorName: string | null;
  reviewerName: string | null;
  tag: string | null;
  reviewedGame: ReviewedGame | null;
}
