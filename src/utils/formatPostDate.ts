import {format} from 'date-fns';

export const formatPostDate = (Dates: string) => {
  const date = new Date(Dates);
  return format(date, 'dd/MM/yy hh:mm a');
};
