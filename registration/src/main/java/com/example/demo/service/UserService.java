package com.example.demo.service;

import com.example.demo.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User registerUser(User user) {
        // Store the user's password as is (not recommended for real applications)
        return userRepository.save(user);
    }
    
    
    public String authenticate(User user) {
		User existingUser = userRepository.findByEmail(user.getEmail());
		if(existingUser != null) {
			return existingUser.getPassword();
		} else {
			return null;
		}
	}
}
