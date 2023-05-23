package project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.model.BenefitStudent;

@Repository
public interface BenefitStudentRepository extends JpaRepository<BenefitStudent, Long> {

    public List<BenefitStudent> findAllByStudent(Long id_student);

}