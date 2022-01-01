package com.example.esserver.repositories;


import com.example.esserver.models.Scooter;
import com.example.esserver.models.SharedScooter;

public interface SharedScooterRepository  {

    SharedScooter findById(long id);
    SharedScooter save(SharedScooter sharedScooter);


}
