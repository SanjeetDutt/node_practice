/* This will create a new table to store user role and populate it with various values */
drop table IF EXISTS user_roles;
create table user_roles
(
    name        varchar     not null constraint user_role_pk primary key,
    create_ts   timestamp   not null default now(),
    update_ts   timestamp   not null default now(),
    delete_ts   timestamp   null
);

comment on table user_roles is 'Table to store various user roles like Admin, Super Admin';

comment on column user_roles.name is 'Will be used to store name of user roles like admin, super admin, etc.';

create unique index user_role_unique_name
    on user_roles (name);

insert into user_roles (name) values
                                 ('SUPER_ADMIN'),
                                 ('ADMIN'),
                                 ('USER')