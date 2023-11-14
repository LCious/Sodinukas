package com.vu.Sodinukas.DTO;

import lombok.Getter;

@Getter
public class UserDTO {

    private int userId;
    private String name;
    private String email;
    private String password;

    public UserDTO() {
    }

    public UserDTO(int userId, String name, String email, String password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

} //create getters and setters