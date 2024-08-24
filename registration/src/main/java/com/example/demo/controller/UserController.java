package com.example.demo.controller;

import com.example.demo.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        logger.info("Register user request: {}", user);
        if (userService.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already in use");
        }
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody User user) {
        String authResponse = userService.authenticate(user);
    	if(authResponse == null) {
    		return new ResponseEntity<>("email",HttpStatus.OK);
    	} else if(user.getPassword().equals(authResponse)) {
    		return new ResponseEntity<>("granted",HttpStatus.OK);
    	} else {
    		return new ResponseEntity<>("password",HttpStatus.OK);
    	}
    }
}
