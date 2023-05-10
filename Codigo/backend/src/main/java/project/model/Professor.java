package project.model;

import javax.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
@Table(name = "professor")
public class Professor {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "departament")
    private String departament;

    @Column(name = "institution")
    private String institution;

    @Column(name = "coinBalance")
    private double coinBalance;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;
}
