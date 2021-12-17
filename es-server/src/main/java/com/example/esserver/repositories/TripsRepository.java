package com.example.esserver.repositories;


import com.example.esserver.models.Trip;

import java.util.List;

public interface TripsRepository {
    List<Trip> findByQuery(String jpqlName, Object... params);
    List<Trip> findAll();
    Trip save(Trip trip);
    Trip deleteById(long id);
    Trip findbyId(long id);
}
