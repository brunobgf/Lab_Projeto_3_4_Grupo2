package project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.model.Coin;

@Repository
public interface CoinRepository extends JpaRepository<Coin, Long> {

    @Query(value = "select * from coin where id_student = :id", nativeQuery = true)
    public List<Coin> getAllByIdStudent(@Param("id") Long id_student);

    @Query(value = "select * from coin where id_professor = :id", nativeQuery = true)
    public List<Coin> getAllByIdProfessor(@Param("id") Long id_professor);

}
