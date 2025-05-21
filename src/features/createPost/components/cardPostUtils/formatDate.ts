import { format } from 'date-fns';

export const formatDate = (date?: Date): string => {
    if (!date || isNaN(date.getTime())) {
        return '';
    }
    return format(date, 'dd/MM/yy hh:mm a').toLowerCase();
};
