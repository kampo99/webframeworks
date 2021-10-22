package com.example.esserver.rest;

import com.example.esserver.models.Scooter;

import java.util.List;

/**
 * <description of functionality>
 *
 * @author W.Thomas
 */
public class ScooterController {

    public List<Scooter> getTwoScooters(){
        return List.of(
                new Scooter("Test-Scooter-A"),
                new Scooter("Test-Scooter-B"));
    }
}