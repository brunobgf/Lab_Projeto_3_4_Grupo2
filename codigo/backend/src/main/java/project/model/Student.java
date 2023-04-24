package project.model;

import javax.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
@Table(name = "student")
public class Student {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "rg")
    private String rg;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "institute")
    private String institute;

    @Column(name = "course")
    private String course;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;
}
