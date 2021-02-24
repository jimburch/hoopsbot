DROP DATABASE IF EXISTS hoopsbot;
CREATE DATABASE hoopsbot;
USE hoopsbot;

CREATE TABLE IF NOT EXISTS takes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(280)
)

INSERT INTO takes (message) VALUES ("Lebron James is better than Michael Jordan.");
INSERT INTO takes (message) VALUES ("Devin Booker is a top 5 all-time player.");
INSERT INTO takes (message) VALUES ("Shaq can't win without Kobe.");