package com.example.esserver.repositories;

import com.example.esserver.models.Scooter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;


@Primary
@Repository
@Transactional
public class ScootersRepositoryJpa implements ScootersRepository{

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Scooter> findAll() {
        TypedQuery<Scooter> namedQuery = em.createQuery("select s from Scooter s", Scooter.class);
        return namedQuery.getResultList();
    }

    @Override
    public Scooter save(Scooter scooter) {
        return em.merge(scooter);
    }

    @Override
    public Scooter deleteById(long id) {
        Scooter toRemove = em.merge(em.find(Scooter.class, id));
        em.remove(toRemove);
        return toRemove;
    }

    @Override
    public Scooter findbyId(long id) {
        return em.find(Scooter.class, id);
    }
}
