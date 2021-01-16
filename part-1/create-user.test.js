const {createAdminUser, createGuestUser} = require("./create-user")

test("Admin", () => {
  const user = createAdminUser()

  expect(user.permissions.canView).toEqual(true)
  expect(user.permissions.canEdit).toEqual(true)
  expect(user.permissions.canAdd).toEqual(true)
});

test("Guest", () => {
  const user = createGuestUser()

  expect(user.permissions.canView).toEqual(true)
  expect(user.permissions.canEdit).toEqual(false)
  expect(user.permissions.canAdd).toEqual(false)
});
