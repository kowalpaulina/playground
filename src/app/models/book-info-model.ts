import { AuthorInfo } from 'src/app/models/index';

export interface BookInfo {
  title?: string;
  author?: AuthorInfo;
  code?: string;
  year?: number;
  type?: string;
}
