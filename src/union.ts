enum PostStatus {
  draft= 0,
  published = 1,
  archived = 2,
  trashed = 3

}
enum Roles{
  'Admin', 'Owner', 'Power User', 'Supprt', 'Read Only', 'Supervisor'
}

type UserRole = keyof typeof Roles;

const paolo = Roles.Admin;
