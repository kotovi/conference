package ru.baikal.ismu.conf.conf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class RootController {
    @GetMapping("/")
    public String greeting(){
        return  "/greeting";
    }

    @GetMapping("/login")
    public String login(){
        return "/login";
    }

    @GetMapping("/registration")
    public String user() {
        return "/registration";
    }

    @GetMapping("/desk")
    public String desk() {
        return "/desk";
    }

    @GetMapping("/tickets")
    public String teckets() {
        return "/tickets";
    }

    @GetMapping("/agreeticket")
    public String agreeticket() {
        return "/agreeticket";
    }

    @GetMapping("/rejectedticket")
    public String rejectedticket() {
        return "/rejectedticket";
    }

    @GetMapping("/tezis")
    public String tezis() {
        return "/tezis";
    }

    @GetMapping("/users")
    public String users() {
        return "/users";
    }

    @GetMapping("/success_unsubscrube")
    public String success_unsubscrube() {
        return "/success_unsubscrube";
    }

    @GetMapping("/unsuccess_unsubscrube")
    public String unsuccess_unsubscrube() {
        return "/unsuccess_unsubscrube";
    }

    @GetMapping("/politic")
    public String politic() {
        return "/politic";
    }

}
