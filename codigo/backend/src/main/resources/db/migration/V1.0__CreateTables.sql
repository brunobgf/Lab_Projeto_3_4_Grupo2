CREATE TABLE student (
    id INT auto_increment PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    rg VARCHAR(15) NOT NULL,
    institute VARCHAR(30) NOT NULL,
    course VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
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
);

CREATE TABLE partner (
    id INT auto_increment PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cnpj VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    login VARCHAR(20) NOT NULL unique,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE coin (
    id INT auto_increment PRIMARY KEY,
    id_student INT NOT NULL,
    id_professor INT NOT NULL,
    motivation VARCHAR(50) NOT NULL,
    amount DECIMAL,
    created_at datetime not null default current_timestamp,

    CONSTRAINT FK_for_student_coin_id FOREIGN KEY (id_student) REFERENCES student(id),
    CONSTRAINT FK_for_professor_coin_id FOREIGN KEY (id_professor) REFERENCES professor(id)
);

CREATE TABLE benefit (
    id INT auto_increment PRIMARY KEY,
    id_partner INT, 
    price INT NOT NULL,
    description VARCHAR(100) NOT NULL,
    image blob,
    name varchar(100),
    CONSTRAINT FK_for_partner_id FOREIGN KEY (id_partner) REFERENCES partner(id)   
);

CREATE TABLE benefit_student (
    id INT auto_increment PRIMARY KEY,
    id_benefit INT, 
    id_student INT,
    exchange_date date,

    CONSTRAINT FK_for_benefit_id FOREIGN KEY (id_benefit) REFERENCES benefit(id) ,
    CONSTRAINT FK_for_student_id FOREIGN KEY (id_student) REFERENCES student(id) 
);