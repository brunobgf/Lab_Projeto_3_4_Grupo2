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

import project.model.Benefit;
import project.service.BenefitService;

@RestController
@RequestMapping("/benefit")
@Validated
public class BenefitController {

    @Autowired
    private BenefitService service;

    @GetMapping("/{id}")
    public ResponseEntity<Benefit> get(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.get(id));
    }

    @GetMapping("")
    public ResponseEntity<List<Benefit>> getAll() {
        return ResponseEntity.ok().body(service.getAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boolean> put(@PathVariable Long id, @RequestBody Benefit obj) {
        return ResponseEntity.ok().body(service.put(id, obj));
    }

    @PostMapping("")
    public ResponseEntity<Boolean> post(@RequestBody Benefit obj) {
        return ResponseEntity.ok().body(service.post(obj));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
