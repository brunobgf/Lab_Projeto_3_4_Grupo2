package project.model;

import java.io.File;
import java.nio.Buffer;
import java.sql.Blob;

import javax.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
@Table(name = "benefit")
public class Benefit {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "price")
    private double price;

    @ManyToOne
    @JoinColumn(name = "id_partner")
    private Partner partner;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    @Column(name = "name")
    private String name;
}