package project.model;

import java.sql.Date;

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

    @Column(name = "id_benefit")
    private Long id_benefit;

    @Column(name = "exchange_date")
    private Date exchange_date;

}