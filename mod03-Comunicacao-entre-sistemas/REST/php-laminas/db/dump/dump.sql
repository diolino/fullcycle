USE apidb;

CREATE TABLE IF NOT EXISTS people (
  id int not null auto_increment,
  name varchar(256),
  primary key (id)
);