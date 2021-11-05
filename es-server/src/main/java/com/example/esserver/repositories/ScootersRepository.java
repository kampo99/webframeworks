package com.example.esserver.repositories;

import com.example.esserver.models.Scooter;

import java.util.List;

public interface ScootersRepository {
    List<Scooter> findAll();
    Scooter save(Scooter scooter);
    Scooter deleteById(long id);
    Scooter findbyId(long id);
}
