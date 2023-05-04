package project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.model.Coin;

@Repository
public interface CoinRepository extends JpaRepository<Coin, Long> {

}

