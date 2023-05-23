package project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.model.BenefitStudent;
import project.service.BenefitStudentService;
import project.service.StudentService;

@RestController
@RequestMapping("/benefitStudent")
@Validated
public class BenefitStudentController {

    @Autowired
    private BenefitStudentService service;

    @GetMapping("/{id}")
    public ResponseEntity<BenefitStudent> get(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.get(id));
    }

    @GetMapping("/byStudent/{id_student}")
    public ResponseEntity<List<BenefitStudent>> getAll(@PathVariable Long id_student) {
        return ResponseEntity.ok().body(service.getAll(id_student));
    }

    @PostMapping("")
    public ResponseEntity<Boolean> post(@RequestBody BenefitStudent obj) {
        return ResponseEntity.ok().body(service.post(obj));
    }
}
