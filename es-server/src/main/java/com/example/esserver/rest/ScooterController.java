package com.example.esserver.rest;

import com.example.esserver.models.Scooter;
import com.example.esserver.repositories.ScootersRepository;
import com.example.esserver.repositories.ScootersRepositoryMock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

/**
 * <description of functionality>
 *
 * @author W.Thomas
 */
@RestController
public class ScooterController {

    @Autowired
    public ScootersRepositoryMock repo;

    @GetMapping("/scooters")
    public List<Scooter> getAllScooters(){
       return repo.findAll();
    }

    @GetMapping("/scooters/{id}")
    public Scooter getScooter(@PathVariable int id){
        return repo.findbyId(id);
    }

    @PostMapping("/update")
    public void createScooter(@RequestBody Scooter scooter){
      Scooter savedScooter = repo.save(scooter);

        ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedScooter.getId()).toUri();
        ResponseEntity.created(location);
    }

    @DeleteMapping("/scooters/{id}")
    public Scooter deleteScooter(@PathVariable int id){
        return repo.deleteById(id);
    }
}