package project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.model.BenefitStudent;
import project.model.Benefit;

@Repository
public interface BenefitStudentRepository extends JpaRepository<BenefitStudent, Long> {

    @Query(value = " select * from benefit b inner join benefit_student bs on bs.id_benefit = b.id where bs.id_student = :id_student", nativeQuery = true)
    List<BenefitStudent> findAll(@Param("id_student") Long id_student);

}