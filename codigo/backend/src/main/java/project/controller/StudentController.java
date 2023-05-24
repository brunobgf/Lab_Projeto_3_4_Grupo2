package project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.model.Student;
import project.service.StudentService;

@RestController
@RequestMapping("/student")
@Validated
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/{id}")
    public ResponseEntity<Student> get(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.get(id));
    }

    @GetMapping("/balance/{id}")
    public ResponseEntity<Double> getSaldo(@PathVariable Long id) {
        Double balance = service.getBalance(id);
        if (balance == null)
            balance = (double) 0;
        return ResponseEntity.ok().body(balance);
    }

    @GetMapping("")
    public ResponseEntity<List<Student>> getAll() {
        return ResponseEntity.ok().body(service.getAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boolean> put(@PathVariable Long id, @RequestBody Student obj) {
        return ResponseEntity.ok().body(service.put(id, obj));
    }

    @PostMapping("")
    public ResponseEntity<Boolean> post(@RequestBody Student obj) {
        return ResponseEntity.ok().body(service.post(obj));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();

    }
}
