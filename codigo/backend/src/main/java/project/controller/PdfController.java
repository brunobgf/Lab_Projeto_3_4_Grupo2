package project.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.time.LocalTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.aspectj.weaver.ast.Instanceof;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.PdfWriter;

import project.service.CoinService;
import project.service.ProfessorService;
import project.service.StudentService;
import project.model.BenefitStudent;
import project.model.Coin;
import project.service.BenefitStudentService;

@RestController
@RequestMapping("/pdf")
public class PdfController {

    @Autowired
    private CoinService coin;

    @Autowired
    private BenefitStudentService benefit;

    @Autowired
    private StudentService student;

    @Autowired
    private ProfessorService professor;

    private final String PATH_IMG = "C:/Users/Daniela Martins/Desktop/PUC/LAPS/03/Lab_Projeto_3_4_Grupo2/codigo/images/logo.png";
    private final String PATH_FILE = "C:/Users/Daniela Martins/Desktop";
    private final float WIDTH_PAGE = 200;
    private final float HEIGHT_PAGE = 842;
    private final float WIDTH_IMG = 100;
    private final float HEIGHT_IMG = 100;

    @PostMapping("")
    private ResponseEntity<Void> generatorPdf(@RequestBody Map<String, Object> json) {

        generatorPDFGeneral(json);

        return ResponseEntity.noContent().build();
    }

    private Image mountImage(float widthPage) throws Exception {

        Image image = Image.getInstance(PATH_IMG);

        image.scaleAbsolute(WIDTH_IMG, HEIGHT_IMG);
        float positionX = (widthPage - image.getScaledWidth()) / 2;
        float positionY = image.getAbsoluteY();
        image.setAbsolutePosition(positionX, positionY);

        return image;
    }

    private Paragraph mountParagraph(String text, int alignment, int size) {
        Font font = new Font(Font.FontFamily.HELVETICA, size);

        if (text.contains("+"))
            font.setColor(0, 255, 0);
        else if (text.contains("- "))
            font.setColor(255, 0, 0);

        Paragraph paragraph = new Paragraph(text, font);
        paragraph.setAlignment(alignment);
        return paragraph;
    }

    private String searchNameUser(Long id, Boolean isStudent) {
        if (isStudent) {
            return student.get(id).getName();
        } else {
            return professor.get(id).getName();
        }

    }

    private Double searchBalanceUser(Long id, Boolean isStudent) {
        if (isStudent) {
            return student.getBalance(id);
        } else {
            return professor.get(id).getCoinBalance();
        }
    }

    private Paragraph mountParagraphExtractCoins(List<Coin> coins, Boolean isStudent) {

        String extract = "";

        for (var coin : coins) {
            if (isStudent)
                extract = extract + "\n+ ";
            else
                extract = extract + "\n- ";

            extract = extract + coin.getAmount() + " $  " + coin.getCreated_at();
        }

        return mountParagraph(extract, Paragraph.ALIGN_LEFT, 8);
    }

    private Paragraph mountParagraphExtractExits(List<BenefitStudent> exits) {

        if (exits == null)
            return mountParagraph("", Paragraph.ALIGN_LEFT, 8);

        String extract = "";

        for (var exit : exits) {
            extract = extract + "\n- " + exit.getBenefit().getPrice() + " $  " + exit.getExchange_date();
        }

        return mountParagraph(extract, Paragraph.ALIGN_LEFT, 8);
    }

    private void generatorPDFGeneral(Map<String, Object> json) {
        Document document = new Document(new Rectangle(WIDTH_PAGE, HEIGHT_PAGE));
        List<BenefitStudent> exits = null;
        Long id = Long.parseLong((String) json.get("id"));
        Boolean isStudent = Boolean.parseBoolean((String) json.get("student"));

        List<Coin> coins = coin.getAll(id, isStudent);

        if (isStudent)
            exits = benefit.getAllByIdStudent(id);

        String nameUser = searchNameUser(id, isStudent);
        Double balance = searchBalanceUser(id, isStudent);

        String user = "\nUsuário: " + nameUser +
                "\nSaldo: " + balance + " moeda(s)\n";

        LocalTime time = LocalTime.now();

        double numero = time.getHour() + (time.getMinute() / 60.0);
        numero = Math.round(numero * 1000.0) / 1000.0;

        try {
            PdfWriter.getInstance(document,
                    new FileOutputStream(PATH_FILE + "/" + nameSequential("extrato", PATH_FILE)));

            document.open();
            document.add(mountImage(document.getPageSize().getWidth()));
            document.add(mountParagraph("Extrato de movimentação de moedas", Paragraph.ALIGN_CENTER, 10));
            document.add(mountParagraph(user, Paragraph.ALIGN_CENTER, 10));
            document.add(mountParagraphExtractCoins(coins, isStudent));
            document.add(mountParagraphExtractExits(exits));
            document.close();
        } catch (Exception error) {
            System.out.println(error);
        }
    }

    public static String nameSequential(String prefix, String path) {

        File[] file = new File(path).listFiles();
        int sequence = 1;
        int num = 0;
        String name = "";

        if (file != null) {
            for (File f : file) {
                if (f.isFile() && f.getName().startsWith(prefix)) {
                    name = f.getName();
                    num = Integer.parseInt(name.substring(prefix.length() + 1, name.lastIndexOf(".pdf")));

                    if (num >= sequence) {
                        sequence = num + 1;
                    }
                }
            }
        }

        return prefix + "_" + String.format("%02d", sequence) + ".pdf";
    }

}
