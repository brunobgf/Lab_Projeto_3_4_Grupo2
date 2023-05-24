package project.model;

import java.util.Date;

import javax.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
@Table(name = "coin")
public class Coin {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_student")
    private Long id_student;

    @Column(name = "id_professor")
    private Long id_professor;

    @Column(name = "motivation")
    private String motivation;

    @Column(name = "amount")
    private double amount;

    @Column(name = "created_at")
    private Date created_at = new Date(System.currentTimeMillis());
}