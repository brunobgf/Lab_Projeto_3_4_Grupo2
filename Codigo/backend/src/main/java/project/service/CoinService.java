package project.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Coin;
import project.repository.CoinRepository;

@Service
public class CoinService {

    @Autowired
    private CoinRepository repository;

    @Transactional
    public boolean post(Coin obj) {
        obj.setId(null);
        return repository.save(obj) != null;
    }

    public List<Coin> getAll(Long id, Boolean byStudent) {
        if (byStudent)
            return repository.getAllByIdStudent(id);
        else
            return repository.getAllByIdProfessor(id);
    }

}
