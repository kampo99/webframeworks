package com.example.esserver.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class SharedScooter extends Scooter{

    @OneToOne(cascade = CascadeType.ALL)
    private User owner;

    private boolean active;

    public SharedScooter() {}

    public SharedScooter(Scooter scooter, User user, boolean active) {
        this.tag = scooter.tag;
        this.status = scooter.status;
        this.gpsLocation = scooter.gpsLocation;
        this.mileage = scooter.mileage;
        this.batteryCharge = scooter.batteryCharge;
        this.setOwner(user);
        this.active = active;
    }


    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        owner.setSharedScooter(this);
        this.owner = owner;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
