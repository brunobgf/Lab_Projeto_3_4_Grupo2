package project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.model.Partner;

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Long> {

}
