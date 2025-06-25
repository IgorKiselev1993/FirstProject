import {format} from 'date-fns';

export const formatPostDate = (dates: string) => {
  const date = new Date(dates);
  return format(date, 'dd/MM/yy hh:mm a').toLowerCase();
};
