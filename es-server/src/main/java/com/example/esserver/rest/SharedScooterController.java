package com.example.esserver.rest;


import com.example.esserver.models.Scooter;
import com.example.esserver.models.SharedScooter;
import com.example.esserver.models.User;
import com.example.esserver.repositories.SharedScooterRepository;
import com.example.esserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class SharedScooterController {

    @Autowired
    SharedScooterRepository sharedScooterRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/users/{userid}/shared-scooters")
    public ResponseEntity<SharedScooter> addSharedScooter(@PathVariable long userid, @RequestBody Scooter scooter){

        User user = this.userRepository.findById(userid);

        //checks if user exist
        if (user == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }

        //makes new sharedscooter with the active status
        SharedScooter sharedScooter = new SharedScooter(scooter, user, true);
        sharedScooter = this.sharedScooterRepository.save(sharedScooter);

        return ResponseEntity.status(HttpStatus.CREATED).body(sharedScooter);
    }


    @PutMapping("/shared-scooters/{sharedscooterid}")
    public ResponseEntity<SharedScooter> changeSharedScooter(@PathVariable long sharedscooterid, @RequestBody SharedScooter scooter){
        SharedScooter sharedScooterBefore = this.sharedScooterRepository.findById(sharedscooterid);

        //checks if sharedScooterBefore exist
        if (sharedScooterBefore == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Shared scooter does not exist");
        }

        //replaces the owner and set the id
        scooter.setOwner(sharedScooterBefore.getOwner());
        scooter.setId(sharedScooterBefore.getId());

        sharedScooterBefore = this.sharedScooterRepository.save(scooter);

        return ResponseEntity.status(HttpStatus.OK).body(sharedScooterBefore);
    }


}
