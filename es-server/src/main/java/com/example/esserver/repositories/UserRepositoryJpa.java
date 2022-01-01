package com.example.esserver.repositories;


import com.example.esserver.models.Scooter;
import com.example.esserver.models.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class UserRepositoryJpa implements UserRepository{

    @PersistenceContext
    private EntityManager em;


    @Override
    public List<User> findAll() {
        TypedQuery<User> namedQuery = em.createQuery("select u from User u", User.class);
        return namedQuery.getResultList();
    }

    @Override
    public User findById(long id) {
        return em.find(User.class, id);
    }


    @Override
    public User save(User user) {
        return this.em.merge(user);
    }

    @Override
    public User deleteById(long id) {
        User userToRemove = this.findById(id);
        em.remove(userToRemove);
        return userToRemove;
    }
}
