package project.controller;

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

import project.model.Professor;
import project.service.ProfessorService;

@RestController
@RequestMapping("/professor")
@Validated
public class ProfessorController {

    @Autowired
    ProfessorService service;

    @GetMapping("/{id}")
    public ResponseEntity<Professor> get(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.get(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boolean> put(@PathVariable Long id, @RequestBody Professor obj) {
        return ResponseEntity.ok().body(service.put(id, obj));
    }

    @PostMapping("")
    public ResponseEntity<Boolean> post(@RequestBody Professor obj) {
        return ResponseEntity.ok().body(service.post(obj));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();

    }
}
