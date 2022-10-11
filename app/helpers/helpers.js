import { error } from './notifications';

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.error(err);
};
