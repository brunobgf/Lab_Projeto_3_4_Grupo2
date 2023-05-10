package project.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Partner;
import project.repository.PartnerRepository;

@Service
public class PartnerService {

    @Autowired
    private PartnerRepository repository;

    public Partner get(Long id) {
        return repository.findById(id).get();
    }

    public List<Partner> getAll() {
        return repository.findAll();
    }

    @Transactional
    public boolean put(Long id, Partner obj) {
        obj.setId(id);
        return repository.save(obj) != null;
    }

    @Transactional
    public boolean post(Partner obj) {
        obj.setId(null);
        return repository.save(obj) != null;
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);

    }
}
