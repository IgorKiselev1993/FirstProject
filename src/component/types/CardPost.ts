import {Post} from './Post.ts';
import {Dispatch, SetStateAction} from 'react';

export interface CardPost {
  item: Post;
  onRemove: () => void;
  onEdit: () => void;
  setLoadingCounter: Dispatch<SetStateAction<number>>;
}
