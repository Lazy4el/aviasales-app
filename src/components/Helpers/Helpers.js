import { format } from 'date-fns';

export const dateTimeFormat = (duration) => {
  return `${Math.trunc(duration / 60)}ч ${duration % 60}м`;
};

export const transferTimeFormat = (data, duration) => {
  const startDate = format(new Date(data), 'HH:mm');
  const endDate = format(new Date(new Date(data).getTime() + duration * 60000), 'HH:mm');
  return `${startDate} - ${endDate}`;
};

export const transfersNumFormat = (transfer) => {
  const textForms = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'];
  let form = '';
  if (transfer >= 4) form += textForms[2];
  if (transfer > 1 && transfer <= 4) form += textForms[1];
  if (transfer === 1) form += textForms[0];

  return transfer ? `${transfer} ${form}` : ' ';
};

export const priceFormat = (price) => {
  return `${price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')}`;
};
