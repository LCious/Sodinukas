package com.vu.Sodinukas.controller;

import com.vu.Sodinukas.DTO.UserDTO;
import com.vu.Sodinukas.DTO.LoginDTO;
import com.vu.Sodinukas.Service.UserService;
import com.vu.Sodinukas.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody UserDTO userDTO)
    {
        String id = userService.addUser(userDTO);
        return id;
    }
//    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
