package project.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Professor;
import project.repository.ProfessorRepository;

@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository repository;

    public Professor get(Long id) {
        return repository.findById(id).get();
    }

    @Transactional
    public boolean put(Long id, Professor obj) {
        obj.setId(id);
        return repository.save(obj) != null;
    }

    @Transactional
    public boolean post(Professor obj) {
        obj.setId(null);
        return repository.save(obj) != null;
    }

    @Transactional
    public void updateAmount(Long id, double newValue) {
        Professor obj = this.get(id);
        obj.setCoinBalance(obj.getCoinBalance() - newValue);
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);

    }

}
