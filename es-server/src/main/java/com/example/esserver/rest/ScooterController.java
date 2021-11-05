package com.example.esserver.rest;

import com.example.esserver.models.Scooter;
import com.example.esserver.repositories.ScootersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <description of functionality>
 *
 * @author W.Thomas
 */
@RestController
public class ScooterController {

    @Autowired
    public ScootersRepository repo;

    @RequestMapping("/allScooters")
    public List<Scooter> getAllScooters(){
       return repo.findAll();
    }

    @RequestMapping("/scooters")
    public List<Scooter> getTwoScooters(){
        return List.of(
                new Scooter(1, "saidhsaf", Scooter.EStatus.IDLE, "few", 14444, 45  ),
                new Scooter(2));
    }

}