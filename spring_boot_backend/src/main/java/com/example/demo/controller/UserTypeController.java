package com.example.demo.controller;

import com.example.demo.entities.UserType;
import com.example.demo.repository.UserTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/usertypes")
public class UserTypeController {

    @Autowired
    private UserTypeRepository userTypeRepository;

    @GetMapping
    public List<UserType> getAllUserTypes() {
        return userTypeRepository.findAll();
    }

    @PostMapping
    public UserType addUserType(@RequestBody UserType userType) {
        return userTypeRepository.save(userType);
    }

    @GetMapping("/{id}")
    public Optional<UserType> getUserTypeById(@PathVariable Long id) {
        return userTypeRepository.findById(id);
    }

    @PutMapping("/{id}")
    public UserType updateUserType(@PathVariable Long id, @RequestBody UserType userType) {
        Optional<UserType> existingUserType = userTypeRepository.findById(id);
        if (existingUserType.isPresent()) {
            UserType updatedUserType = existingUserType.get();
            updatedUserType.setType(userType.getType());
            return userTypeRepository.save(updatedUserType);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deleteUserType(@PathVariable Long id) {
        userTypeRepository.deleteById(id);
    }
}
