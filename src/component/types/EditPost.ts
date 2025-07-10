import {Post} from './Post.ts';
import React from 'react';

export interface EditPost {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  values: Post;
  setValues: React.Dispatch<React.SetStateAction<Post | null>>;
}
