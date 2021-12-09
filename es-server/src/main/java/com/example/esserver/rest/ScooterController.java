package com.example.esserver.rest;

import com.example.esserver.exception.ScooterConditionFailed;
import com.example.esserver.exception.ScooterNotFoundException;
import com.example.esserver.models.Scooter;
import com.example.esserver.models.Trip;
import com.example.esserver.repositories.ScootersRepository;
import com.example.esserver.repositories.ScootersRepositoryMock;
import com.example.esserver.repositories.TripsRepository;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.transaction.Transactional;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * <description of functionality>
 *
 * @author W.Thomas
 */
@RestController
public class ScooterController {

    @Autowired
    public ScootersRepository repo;

    @Autowired
    public TripsRepository trepo;

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
        scooter.setId(0L);
        Scooter savedScooter = repo.save(scooter);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedScooter.getId()).toUri();
        return ResponseEntity.created(location).body(savedScooter);
    }

    @CrossOrigin(origins = "http://localhost:4200/scooters/{id}")
    @PutMapping("/scooters/{id}")
    public ResponseEntity<Object> updateScooter(@RequestBody Scooter scooter, @PathVariable String id) {
        Scooter updatedScooter = repo.save(scooter);

        if (updatedScooter == null) {
            throw new ScooterConditionFailed("Scooter-Id=" + scooter.id + " does not match path parameter=" + id);
        }
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();

        return ResponseEntity.status(HttpStatus.ACCEPTED).location(location).build();
    }

    @CrossOrigin(origins = "http://localhost:4200/scooters/{id}")
    @DeleteMapping("/scooters/{id}")
    public ResponseEntity<Object> deleteScooter(@PathVariable Integer id) {
        if (id == null){
            throw new ScooterNotFoundException("Scooter with id-" + id + " does not exist");
        }

        Scooter founded = repo.findbyId(id);

        if (founded == null) {
            throw new ScooterNotFoundException("Scooter with id-" + id + " does not exist");
        }

        repo.deleteById(founded.id);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();

        return ResponseEntity.status(HttpStatus.ACCEPTED).location(location).build();
    }

    @JsonView(Scooter.class)
    @GetMapping("/scooters/summary")
    public List<Scooter> getScooterSummary(){
        return repo.findAll();
    }


    @PostMapping("/scooters/{id}/trips")
    public ResponseEntity<Object> createTrip(@PathVariable Integer id){

        if (id == null){
            throw new ScooterNotFoundException("Scooter with id-" + id + " does not exist");
        }

        Scooter found = repo.findbyId(id);

        if (found == null) {
            throw new ScooterNotFoundException("Scooter with id-" + id + " does not exist");
        }

        if (found.status != Scooter.EStatus.IDLE || found.batteryCharge <= 10){
            throw new ScooterConditionFailed("Scooter-Id=" + found.getId() + " with status " + found.getStatus() +
                    " and battery level " + found.getBatteryCharge() + "% cannot be claimed for another trip");
        }

        Trip t = Trip.createSampleTrip(found, false);
        Trip savedTrip = trepo.save(t);

        savedTrip.associateScooter(found);
        found.associateTrip(savedTrip);
        found.setStatus(Scooter.EStatus.INUSE);

        repo.save(found);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedTrip.getId()).toUri();

        return ResponseEntity.created(location).body(savedTrip);
    }



}
