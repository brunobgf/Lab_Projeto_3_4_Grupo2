package project.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Student;
import project.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public Student get(Long id) {
        return repository.findById(id).get();
    }

    public Double getBalance(Long id) {
        return repository.getBalance(id);
    }

    public List<Student> getAll() {
        return repository.findAll();
    }

    @Transactional
    public boolean put(Long id, Student obj) {
        obj.setId(id);
        return repository.save(obj) != null;
    }

    @Transactional
    public boolean post(Student obj) {
        obj.setId(null);
        return repository.save(obj) != null;
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);

    }

}