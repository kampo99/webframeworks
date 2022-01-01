package com.example.esserver.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue
    @JsonView(User.class)
    @Column(name = "id")
    public long id;
    @JsonView(User.class)
    public String name;
    @JsonView(User.class)
    public String email;
    @JsonView(User.class)
    public String role;

    public String hashedPassword;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", referencedColumnName = "user_id")
    private SharedScooter sharedScooter;


    public User(long id, String name, String email, String hashedPassword, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.role = role;
    }

    public User() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public SharedScooter getSharedScooter() {
        return sharedScooter;
    }

    public void setSharedScooter(SharedScooter sharedScooter) {
        this.sharedScooter = sharedScooter;
    }
}
