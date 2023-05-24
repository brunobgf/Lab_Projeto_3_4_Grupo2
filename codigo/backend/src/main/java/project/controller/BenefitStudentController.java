package project.controller;

import java.io.Console;
import java.util.List;
import java.util.logging.Logger;

import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.HtmlEmail;
import org.apache.commons.mail.SimpleEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.model.Benefit;
import project.model.BenefitStudent;
import project.service.BenefitService;
import project.service.BenefitStudentService;
import project.service.StudentService;

@RestController
@RequestMapping("/benefitStudent")
@Validated
public class BenefitStudentController {

    @Autowired
    private BenefitStudentService service;

    @Autowired
    private StudentService student;

    @Autowired
    private BenefitService benefit;

    @GetMapping("/{id}")
    public ResponseEntity<BenefitStudent> get(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.get(id));
    }

    @GetMapping("/byStudent/{id_student}")
    public ResponseEntity<List<BenefitStudent>> getAll(@PathVariable Long id_student) {
        return ResponseEntity.ok().body(service.getAllByIdStudent(id_student));
    }

    @PostMapping("")
    public ResponseEntity<Boolean> post(@RequestBody BenefitStudent obj) {
        Boolean ret = service.post(obj);
        enviaEmail(obj);
        return ResponseEntity.ok().body(ret);
    }

    private String emailStudent(Long id) {
        return student.get(id).getEmail();
    }

    private String mensageBenefit(Long id) {
        Benefit obj = benefit.get(id);
        return "Olá. Acabamos de identificar uma troca de moedas em seu nome." +
                "\n\nMoedas: " + Double.toString(obj.getPrice()) +
                "\nBenefício adquirido: " + obj.getName() + " - " + obj.getDescription() +
                "\n\nParabéns por sua troca! Até mais.";
    }

    private void enviaEmail(BenefitStudent obj) {

        String senderEmail = "fa06e99bd44d15";
        String senderPassword = "0c13650f8db1a1";
        String recipientEmail = emailStudent(obj.getId_student());
        String subject = "Troca de moedas";
        String message = mensageBenefit(obj.getBenefit().getId());
        SimpleEmail email = new SimpleEmail();
        email.setHostName("sandbox.smtp.mailtrap.io");
        email.setSmtpPort(2525);
        email.setAuthentication(senderEmail, senderPassword);
        email.setSSLOnConnect(false);
        email.setStartTLSEnabled(true);

        try {
            email.setFrom("noreply@example.com");
            email.addTo(recipientEmail);
            email.setSubject(subject);
            email.setMsg(message);
            email.send();
            System.out.println("E-mail enviado com sucesso!");
        } catch (Exception e) {
            System.out.println("Erro ao enviar o e-mail: " + e.getMessage());
        }

    }
}
