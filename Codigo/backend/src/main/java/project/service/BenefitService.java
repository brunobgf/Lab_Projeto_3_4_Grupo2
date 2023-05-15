package project.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Benefit;
import project.repository.BenefitRepository;

@Service
public class BenefitService {

    @Autowired
    private BenefitRepository repository;

    public Benefit get(Long id) {
        return repository.findById(id).get();
    }

    public List<Benefit> getAll() {
        return repository.findAll();
    }

    @Transactional
    public boolean put(Long id, Benefit obj) {
        obj.setId(id);
        return repository.save(obj) != null;
    }

    @Transactional
    public boolean post(Benefit obj) {
        obj.setId(null);
        return repository.save(obj) != null;
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);

    }
}

