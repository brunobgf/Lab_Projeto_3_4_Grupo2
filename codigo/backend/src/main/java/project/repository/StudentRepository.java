package project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query(value = " select                   " +
            "   sum(c.amount) - sum (b.price) " +
            " from benefit_student bf         " +
            " inner join benefit b on         " +
            "   b.id = bf.id_student          " +
            " inner join coin c on            " +
            "   c.id_student = bf.id_student  " +
            " where bf.id_student = :id       ", nativeQuery = true)
    public Double getBalance(@Param("id") Long id);

}
