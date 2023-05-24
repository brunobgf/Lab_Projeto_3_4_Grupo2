package project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query(value = " select                                                     " +
            "     (sum(coalesce(c.amount, 0)) - coalesce((                      " +
            "         select                                                    " +
            "             sum(coalesce(b.price, 0))                             " +
            "         from                                                      " +
            "             student st                                            " +
            "             left join benefit_student bf on bf.id_student = st.id " +
            "             inner join benefit b on b.id = bf.id_benefit          " +
            "         where                                                     " +
            "             st.id = :id_student                                   " +
            "     ), 0)) as result                                              " +
            " from                                                              " +
            "     student s                                                     " +
            "     inner join coin c on c.id_student = s.id                      " +
            " where                                                             " +
            "     s.id = :id_student                                            ", nativeQuery = true)
    Double getBalance(@Param("id_student") Long id_student);

}
