import { error } from './notifications';

const handleAjaxError = (err) => {
  error('Something went wrong');
  console.error(err);
};

export default handleAjaxError;
