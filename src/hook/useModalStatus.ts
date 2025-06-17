import {useState} from 'react';

export const useModalStatus = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  return {isModalVisible, openModal, closeModal};
};
