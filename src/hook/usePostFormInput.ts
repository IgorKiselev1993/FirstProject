import {useState} from 'react';

export const usePostFormInput = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Published');
  const [description, setDescription] = useState('');

  const dataFormInputPost = [
    {
      id: 'title',
      value: title,
      onChange: setTitle,
      placeholder: 'Title',
    },
    {
      id: 'status',
      value: status,
      onChange: setStatus,
      placeholder: 'Published',
    },
    {
      id: 'description',
      value: description,
      onChange: setDescription,
      placeholder: 'Description',
    },
  ];
  return {
    dataFormInputPost,
    values: {title, status, description},
    setTitle: {setTitle, setStatus, setDescription},
  };
};
