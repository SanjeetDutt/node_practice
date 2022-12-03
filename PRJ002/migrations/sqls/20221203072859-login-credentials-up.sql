/* Replace with your SQL commands */
drop table if exists "login_credentials" cascade;
create table "login_credentials"
(
    id         SERIAL PRIMARY KEY,
    hash       varchar UNIQUE NOT NULL,
    user_id    integer,
    create_ts  timestamp      NOT NULL DEFAULT (now()),
    update_ts  timestamp      NOT NULL DEFAULT (now()),
    delete_ts  timestamp               DEFAULT null,
    constraint login_credentials_user_fk foreign key (user_id) references "users" (id) on update cascade on delete cascade
)
