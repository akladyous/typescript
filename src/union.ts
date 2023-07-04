enum PostStatus {
  Draft= 0,
  Published = 1,
  Archived = 2,
  Trashed = 3
}


enum Roles {
  'Admin', 'Owner', 'Power User', 'Supprt', 'Read Only', 'Supervisor'
}

type UserRole = keyof typeof Roles;

const paolo = Roles.Admin;
