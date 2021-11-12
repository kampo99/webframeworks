package com.example.esserver.repositories;

import com.example.esserver.models.Scooter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * <description of functionality>
 *
 * @author W.Thomas
 */
@Component
public class ScootersRepositoryMock implements ScootersRepository {
    List<Scooter> scooters = new ArrayList<>();
    int nextId = 30000;


    @Override
    public List<Scooter> findAll() {
        return scooters;
    }


    public ScootersRepositoryMock() {
        for (int i = 0; i < 8; i++) {
                this.scooters.add(Scooter.createSampleScooter(getNextId()));
        }
    }

    public int getNextId() {
        this.nextId += 3;
        return nextId;
    }

    @Override
    public Scooter findbyId(long id){
        for (int i = 0; i < this.scooters.size(); i++) {
            if (id == this.scooters.get(i).id){
                return this.scooters.get(i);
            }
        }
        return null;
    }

    @Override
    public Scooter save(Scooter scooter){
        if (scooter.id == 0L){
            scooter.setId(getNextId());
            scooters.add(scooter);
            return scooter;
        }
        for (int i = 0; i < this.scooters.size(); i++) {
            if (this.scooters.get(i).id == scooter.id){
                this.scooters.set(i, scooter);
                return this.scooters.get(i);
            }
        }
        return null;
    }

    @Override
    public Scooter deleteById(long id){
        for (int i = 0; i < this.scooters.size(); i++) {
            Scooter temp;
            if (this.scooters.get(i).id == id){
                int index = this.scooters.indexOf(this.scooters.get(i));
                temp = this.scooters.get(index);
                this.scooters.remove(index);
                return temp;
            }
        }
        return null;
    }
}