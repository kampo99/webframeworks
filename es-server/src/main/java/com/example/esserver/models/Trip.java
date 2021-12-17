package com.example.esserver.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDateTime;



@Entity
@NamedQueries({

        @NamedQuery(name = "Trip_find_current_from_scooter",
        query = "SELECT t FROM Trip t WHERE t.scooterInuse = :scooterInuse")
})
public class Trip {

    @Id
    @GeneratedValue
    public Long id;

    public LocalDateTime startDate;
    public LocalDateTime endDate;
    public String startPosition;
    public String endPosition;
    public Double mileage;
    public Double costTrip;

    @JsonBackReference
    @ManyToOne
    public Scooter scooterInuse;

    public Trip(Long id, LocalDateTime startDate, LocalDateTime endDate, String startPosition, String endPosition, Double mileage, Double costTrip, Scooter scooterInuse) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        this.mileage = mileage;
        this.costTrip = costTrip;
        this.scooterInuse = scooterInuse;
    }

    public Trip(Long id) {

    }

    public Trip() {

    }

    public static Trip createSampleTrip(Scooter scooter, Boolean done){
        Trip trip = new Trip();
        trip.setStartDate(LocalDateTime.now());
        if (!done){
            trip.setEndDate(null);
            trip.setEndPosition(null);
        } else {
            trip.setEndDate(LocalDateTime.of(2021, 12, 10, 14, 50));
            trip.setEndPosition("Rotterdam");
        }
        trip.setStartPosition("Amsterdam");
        trip.setMileage(Math.random() * 10000);
        trip.setCostTrip(Math.random() * 100);
        trip.setScooterInuse(scooter);
        return trip;
    }


    public boolean associateScooter(Scooter scooter){
        if (scooter != null){
            for (int i = 0; i < scooter.trips.size(); i++) {
                if (scooter.trips.get(i).id == this.id){
                    return false;
                }
            }
            scooterInuse = scooter;
            return true;
        }
        return false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public String getStartPosition() {
        return startPosition;
    }

    public void setStartPosition(String startPosition) {
        this.startPosition = startPosition;
    }

    public String getEndPosition() {
        return endPosition;
    }

    public void setEndPosition(String endPosition) {
        this.endPosition = endPosition;
    }

    public Double getMileage() {
        return mileage;
    }

    public void setMileage(Double mileage) {
        this.mileage = mileage;
    }

    public Double getCostTrip() {
        return costTrip;
    }

    public void setCostTrip(Double costTrip) {
        this.costTrip = costTrip;
    }

    public Scooter getScooterInuse() {
        return scooterInuse;
    }

    public void setScooterInuse(Scooter scooterInuse) {
        this.scooterInuse = scooterInuse;
    }
}
