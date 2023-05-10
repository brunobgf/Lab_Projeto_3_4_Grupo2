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

import project.model.Coin;
import project.service.CoinService;
import project.service.ProfessorService;

@RestController
@RequestMapping("/coin")
@Validated
public class CoinController {

    @Autowired
    private CoinService service;

    @Autowired
    private ProfessorService serviceProfessor;

    @PostMapping("")
    public ResponseEntity<Boolean> post(@RequestBody Coin obj) {
        Boolean ret = service.post(obj);

        if (ret) {
            serviceProfessor.updateAmount(obj.getId_professor(), obj.getAmount());
        }

        return ResponseEntity.ok().body(ret);
    }

    @GetMapping("/byStudent/{id_student}")
    public ResponseEntity<List<Coin>> getAllByStudent(@PathVariable Long id_student) {
        return ResponseEntity.ok().body(service.getAll(id_student, true));
    }

    @GetMapping("/byProfessor/{id_professor}")
    public ResponseEntity<List<Coin>> getAllByProfessor(@PathVariable Long id_professor) {
        return ResponseEntity.ok().body(service.getAll(id_professor, false));
    }

}
