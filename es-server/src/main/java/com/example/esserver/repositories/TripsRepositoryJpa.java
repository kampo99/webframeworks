package com.example.esserver.repositories;

import com.example.esserver.models.Scooter;
import com.example.esserver.models.Trip;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Repository
@Transactional
public class TripsRepositoryJpa implements TripsRepository{

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Trip> findAll() {
        TypedQuery<Trip> namedQuery = em.createQuery("select t from Trip t", Trip.class);
        return namedQuery.getResultList();
    }

    @Override
    public Trip save(Trip trip) {
        return em.merge(trip);
    }

    @Override
    public Trip deleteById(long id) {
        Trip toRemove = em.merge(em.find(Trip.class, id));
        em.remove(toRemove);
        return toRemove;
    }

    @Override
    public Trip findbyId(long id) {
        return em.find(Trip.class, id);
    }
}
