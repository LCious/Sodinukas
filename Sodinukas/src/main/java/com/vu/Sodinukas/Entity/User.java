package com.vu.Sodinukas.Entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name="users")
@Getter
public class User {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;


    @Column(name="name")
    private String userName;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    public User() {
    }
    public User(int userId, String employeename, String email, String password) {
        this.userId = userId;
        this.userName = employeename;
        this.email = email;
        this.password = password;
    }

}
