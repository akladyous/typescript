"use strict";
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Draft"] = 0] = "Draft";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Archived"] = 2] = "Archived";
    PostStatus[PostStatus["Trashed"] = 3] = "Trashed";
})(PostStatus || (PostStatus = {}));
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["Owner"] = 1] = "Owner";
    Roles[Roles["Power User"] = 2] = "Power User";
    Roles[Roles["Supprt"] = 3] = "Supprt";
    Roles[Roles["Read Only"] = 4] = "Read Only";
    Roles[Roles["Supervisor"] = 5] = "Supervisor";
})(Roles || (Roles = {}));
var paolo = Roles.Admin;
