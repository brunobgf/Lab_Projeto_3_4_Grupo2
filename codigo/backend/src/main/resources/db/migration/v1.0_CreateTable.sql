CREATE TABLE coin (
    id INT auto_increment PRIMARY KEY,
    motivation VARCHAR(50) NOT NULL,

    CONSTRAINT FK_for_student_coin_id FOREIGN KEY (student_id) REFERENCES student(id)
)

CREATE TABLE partner (
    id INT auto_increment PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cnpj VARCHAR(15) NOT NULL,
    email VARCHAR(15) NOT NULL,
    login VARCHAR(20) NOT NULL unique,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE professor (
    id INT auto_increment PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    departament VARCHAR(30) NOT NULL,
    institution VARCHAR(30) NOT NULL,
    coin_balance INT NOT NULL,
    login VARCHAR(20) NOT NULL unique,
    password VARCHAR(20) NOT NULL
)

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