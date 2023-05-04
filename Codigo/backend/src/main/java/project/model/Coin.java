package project.model;

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

    @Column(name = "motivation")
    private String motivation;

    @Column(name = "student_id")
    private Student student;

}