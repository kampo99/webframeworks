package com.example.esserver.repositories;

import com.example.esserver.models.SharedScooter;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class SharedScooterRepositoryJpa implements SharedScooterRepository {

    @PersistenceContext
    private EntityManager em;


    @Override
    public SharedScooter findById(long id) {
        return this.em.find(SharedScooter.class, id);
    }

    @Override
    public SharedScooter save(SharedScooter sharedScooter) {
        return this.em.merge(sharedScooter);
    }
}
