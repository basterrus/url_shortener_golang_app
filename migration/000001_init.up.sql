CREATE TABLE users
(
    id            INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username      VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE url_list
(
    id          INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    long_url    VARCHAR(255) NOT NULL,
    short_url   VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE users_lists
(
    user_id INTEGER REFERENCES users (id) ON DELETE SET NULL,
    url_id  INTEGER REFERENCES url_list (id) ON DELETE SET NULL,
    UNIQUE(user_id, url_id)
);