package com.example.esserver.repositories;

import com.example.esserver.models.User;

import java.util.List;

public interface UserRepository {
    List<User> findAll();
    User findById(long id);
    User save(User user);
    User deleteById(long id);
}
