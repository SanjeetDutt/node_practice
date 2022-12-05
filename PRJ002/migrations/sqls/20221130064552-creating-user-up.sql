/* Sql command to create table user and populate a default value in it */
drop table if exists "users" cascade ;
create table "users"
(
    id             serial constraint user_pk primary key,
    first_name     varchar                        not null,
    last_name      varchar,
    email          varchar                        not null,
    password       varchar                        not null,
    user_role_name varchar   default 'USER'       not null,
    effective_date date      default current_date not null,
    end_date       date      default '2199-12-31' not null,
    create_ts      timestamp default now()        not null,
    update_ts      timestamp default now()        not null,
    delete_ts      timestamp default null,
    constraint user_user_role_fk foreign key (user_role_name) references user_roles (name)
        on update cascade on delete cascade
);

comment on table "users" is 'Table to store user information';

comment on column "users".id is 'user id will be unique for all user';

comment on column "users".email is 'email should be unique for all user.';

comment on column "users".user_role_name is 'this will be foreign key to user role table to know the current role of the user.';

insert into public."users" (first_name, last_name, email, password,user_role_name)
values ('Sanjeet', 'Dutt', 'sanjeetdutt@gmail.com', '8cd2321c33b73642fa434452e3b7f1e3','SUPER_ADMIN')
-- password : 08061995
