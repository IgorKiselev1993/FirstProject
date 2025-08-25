import axios from 'axios';
import {Alert} from 'react-native';

export type AxiosErrorResponse = {
  status?: number;
  message: string;
};

export const handleError = (error: unknown): Promise<AxiosErrorResponse> => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;
    const axiosError: AxiosErrorResponse = {status, message};
    const statusMessages: Record<number, string> = {
      400: 'Неверный запрос',
      401: 'Ошибка авторизации',
      403: 'Доступ запрещён',
      404: 'Не найдено',
      500: 'Серверная ошибка',
    };
    if (status) {
      const errorBlock = statusMessages[status] || `Ошибка: ${status}`;
      Alert.alert(errorBlock);
    } else if (error.request) {
      Alert.alert('Сервер не отвечает', 'Проверьте соединение с сервером');
    } else {
      Alert.alert('Произошла ошибка', error.message);
    }
    return Promise.reject(axiosError);
  }
  const errorAll = error instanceof Error ? error.message : 'Неизвестная ошибка';
  Alert.alert('Ошибка', errorAll);
  return Promise.reject({message: errorAll});
};
