package project.model;

import java.util.Date;

import javax.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
@Table(name = "benefitStudent")
public class BenefitStudent {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_student")
    private Long id_student;

    @ManyToOne
    @JoinColumn(name = "id_benefit")
    private Benefit benefit;

    @Column(name = "exchange_date")
    private Date exchange_date = new Date(System.currentTimeMillis());

}