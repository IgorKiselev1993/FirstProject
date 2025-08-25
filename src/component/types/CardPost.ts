import {Post} from './Post.ts';

export interface CardPost {
  item: Post;
  onRemove: (id: string) => void;
  onEdit: (post: Post) => void;
}
