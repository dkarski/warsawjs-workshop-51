const defaultPermissions = {
  canView: false,
  canEdit: false,
  canAdd: false
}

function createUser(name){
  return {
    name,
    permissions: defaultPermissions
  }
}

function createGuestUser(){
  const user = createUser("Guest");
  user.permissions.canView = true;
  return user
}

function createAdminUser(){
  const user = createUser("Admin");
  user.permissions.canView = true;
  user.permissions.canEdit = true;
  user.permissions.canAdd = true;
  return user
}

module.exports.createGuestUser = createGuestUser
module.exports.createAdminUser = createAdminUser
