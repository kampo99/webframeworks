package com.example.esserver.rest;

import com.example.esserver.exception.ScooterConditionFailed;
import com.example.esserver.exception.ScooterNotFoundException;
import com.example.esserver.models.Scooter;
import com.example.esserver.repositories.ScootersRepository;
import com.example.esserver.repositories.ScootersRepositoryMock;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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
    public List<Scooter> getAllScooters() {
        return repo.findAll();
    }

    @GetMapping("/scooters/{id}")
    public Scooter getScooter(@PathVariable int id) {
        Scooter foundScooter = repo.findbyId(id);
        if (foundScooter == null) {
            throw new ScooterNotFoundException("Scooter with id-" + id + " does not exist");
        }
        return foundScooter;
    }

    @PostMapping("/scooters")
    public ResponseEntity<Object> createScooter(@RequestBody Scooter scooter) {
        Scooter savedScooter = repo.save(scooter);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedScooter.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/scooters/{id}")
    public ResponseEntity<Object> updateScooter(@RequestBody Scooter scooter, @PathVariable int id) {
        Scooter updatedScooter = repo.save(scooter);

        if (updatedScooter == null) {
            throw new ScooterConditionFailed("Scooter-Id=" + scooter.id + " does not match path parameter=" + id);
        }
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();

        return ResponseEntity.status(HttpStatus.OK).location(location).build();
    }


    @DeleteMapping("/scooters/{id}")
    public ResponseEntity<Object> deleteScooter(@PathVariable int id) {
        Scooter deletedScooter = repo.deleteById(id);

        if (deletedScooter == null) {
            throw new ScooterNotFoundException("Scooter with id-" + id + " does not exist");
        }
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();

        return ResponseEntity.status(HttpStatus.OK).location(location).build();
    }

    @JsonView(Scooter.class)
    @GetMapping("/scooters/summary")
    public List<Scooter> getScooterSummary(){
        return repo.findAll();
    }
}