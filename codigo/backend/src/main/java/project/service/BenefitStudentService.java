package project.service;

import java.util.Date;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.model.BenefitStudent;
import project.repository.BenefitStudentRepository;

@Service
public class BenefitStudentService {

    @Autowired
    private BenefitStudentRepository repository;

    public BenefitStudent get(Long id) {
        return repository.findById(id).get();
    }

    public List<BenefitStudent> getAllByIdStudent(Long id_student) {
        return repository.findAll(id_student);
    }

    @Transactional
    public boolean post(BenefitStudent obj) {
        obj.setId(null);
        return repository.save(obj) != null;
    }
}
