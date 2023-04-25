CREATE TABLE student (
                       id INT auto_increment PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       cpf VARCHAR(15) NOT NULL,
                       rg VARCHAR(15) NOT NULL,
                       institute VARCHAR(30) NOT NULL,
                       course VARCHAR(30) NOT NULL,
                       email VARCHAR(15) NOT NULL,
                       login VARCHAR(20) NOT NULL unique,
                       password VARCHAR(20) NOT NULL
);

CREATE TABLE partner (
                       id INT auto_increment PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       cnpj VARCHAR(15) NOT NULL,
                       email VARCHAR(15) NOT NULL,
                       login VARCHAR(20) NOT NULL unique,
                       password VARCHAR(20) NOT NULL
);