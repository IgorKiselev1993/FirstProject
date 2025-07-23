import {format} from 'date-fns';
import {Locales} from '../constant/locales.ts';

export const formatPostDate = (dates: string) => {
  const date = new Date(dates);
  return format(date, Locales.common.dateFormat).toLowerCase();
};
