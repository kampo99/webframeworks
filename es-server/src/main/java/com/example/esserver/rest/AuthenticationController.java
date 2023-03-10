package com.example.esserver.rest;


import com.example.esserver.JWT.JWTokenUtils;
import com.example.esserver.JWT.PasswordEncoder;
import com.example.esserver.models.User;
import com.example.esserver.repositories.UserRepository;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.NotAcceptableStatusException;

import java.util.Objects;

@RestController
public class AuthenticationController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JWTokenUtils tokenUtils;

    @Autowired
    private UserRepository userRepository;


    @JsonView(User.class)
    @PostMapping("/authentication/login")
    public ResponseEntity<Object> authLogin(@RequestBody ObjectNode login){

        //checks if data is available
        if (login.get("email") == null || login.get("password") == null){
           throw new NotAcceptableStatusException("Invalid data");
        }

        //spits the email to get the password
        String email = login.get("email").asText();
        String[] splitEmail = email.split("@");

        if (!Objects.equals(login.get("password").asText(), splitEmail[0])){
            throw new NotAcceptableStatusException("Invalid data");
        }

        //creates a new user with hashed password
        User user = new User(0, splitEmail[0], email, passwordEncoder.encode(login.get("password").asText()), "registered user");
        this.userRepository.save(user);

        //creates token for the user and adds it in the header
        String token = tokenUtils.encode(user.getEmail(), user.getRole().equals("admin"));

        return ResponseEntity.accepted()
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + token)
                .body(user);
    }
}
