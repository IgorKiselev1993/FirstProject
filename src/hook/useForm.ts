import {useState} from 'react';
import {Locales} from '../constant/locales.ts';

export const useForm = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState(Locales.uiModal.openStatus);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const isFormValid =
    title.trim().length > 0 &&
    status.trim().length > 0 &&
    description.trim().length > 0 &&
    !!image && image.length > 0;

  return {
    image, setImage,
    values: {title, status, description},
    setValues: {setTitle, setStatus, setDescription},
    isFormValid,
  };
};
