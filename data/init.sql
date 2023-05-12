CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    hashedPassword VARCHAR(200) NOT NULL,
    salt VARCHAR(16) NOT NULL,
    perms VARCHAR(16) NOT NULL
);