import createUsers from '@/api/users';
import createMedia from '@/api/media';

export default (context, inject) => {
  const api = {
    users: createUsers(),
    media: createMedia(),
  };

  inject('api', api);
};