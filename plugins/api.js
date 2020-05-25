import createUsers from '@/api/users';
import createItems from '@/api/items';

export default (context, inject) => {
  const api = {
    users: createUsers(),
    items: createItems(),
  };

  inject('api', api);
};