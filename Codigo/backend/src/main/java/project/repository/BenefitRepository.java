package project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.model.Benefit;

@Repository
public interface BenefitRepository extends JpaRepository<Benefit, Long> {

}