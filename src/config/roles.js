const roles = ['user', 'scanner', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[1], ['createCheckin']);
roleRights.set(roles[2], [roleRights.get(roles[1]), 'getUsers', 'manageUsers']);

module.exports = {
  roles,
  roleRights,
};
