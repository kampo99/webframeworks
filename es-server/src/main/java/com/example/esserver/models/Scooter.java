package com.example.esserver.models;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;



@Entity
@NamedQueries({

        @NamedQuery(name = "Scooter_find_by_status",
        query = "SELECT s FROM Scooter s WHERE s.status = :status"),

        @NamedQuery(name = "Scooter_find_by_battery",
        query = "SELECT s FROM Scooter s WHERE s.batteryCharge < :max")
})
public class Scooter {

    @Id
    @GeneratedValue()
    @JsonView(Scooter.class)
    public long id;
    @JsonView(Scooter.class)
    public String tag;
    @JsonView(Scooter.class)
    public EStatus status;
    public String gpsLocation;
    public double mileage;
    @JsonView(Scooter.class)
    public int batteryCharge;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "scooterInuse")
    public List<Trip> trips = new ArrayList<>();

    public enum EStatus {IDLE, INUSE, MAINTENANCE}

    protected Scooter(){

    }

    public Scooter(long id, String tag, EStatus status, String gpsLocation, double mileage, int batteryCharge) {
        this.id = id;
        this.tag = tag;
        this.status = status;
        this.gpsLocation = gpsLocation;
        this.mileage = mileage;
        this.batteryCharge = batteryCharge;
    }

    public Scooter(long id) {
        this.id = id;
    }

    public static Scooter createSampleScooter(long pid) {
        Scooter scooter = new Scooter(pid);
        scooter.setTag(scooter.randomString(8));
        scooter.setStatus(EStatus.values()[(int) (Math.random() * 3)]);
        scooter.setGpsLocation(((Math.floor(Math.random() * (52000000 - 53000000 + 1)) + 53000000) / 1000000) + "N, " +
                ((Math.floor(Math.random() * (4000000 - 5000000 + 1)) + 5000000) / 1000000) + "E");
        scooter.setMileage(Math.random() * 10000);
        scooter.setBatteryCharge((int) (Math.floor(Math.random() * (100 - 5 + 1)) + 5));
        return scooter;
    }

    public boolean associateTrip(Trip trip){
        if (trip != null){
            for (int i = 0; i < trips.size(); i++) {
                if (trips.get(i).id == trip.id){
                    return false;
                }
            }
            this.trips.add(trip);
            return true;
        }
        return false;
    }

    public boolean disassociateTrip(Trip trip){
        if (trip != null){
            for (int i = 0; i < trips.size(); i++) {
                if (trips.get(i).id == trip.id){
                    trip.setScooterInuse(null);
                    this.trips.remove(trips.get(i));
                    return true;
                }
            }
        }
        return false;
    }

    private String getEnum() {
        double random = this.getRandomInt(1, 3);
        if (random == 1) {
            return String.valueOf(EStatus.IDLE);
        }
        if (random == 2) {
            return String.valueOf(EStatus.INUSE);
        }
        if (random == 3) {
            return String.valueOf(EStatus.MAINTENANCE);
        }
        return "";
    }

    private double getRandomInt(double min, double max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private String randomString(int number) {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "0123456789"
                + "abcdefghijklmnopqrstuvxyz";

        StringBuilder sb = new StringBuilder(number);

        for (int i = 0; i < number; i++) {

            int index
                    = (int) (AlphaNumericString.length()
                    * Math.random());

            sb.append(AlphaNumericString
                    .charAt(index));
        }

        return sb.toString();
    }


    private String gpsLocation() {
        double latitude = this.getRandomInt(52000000, 53000000) / 1000000;
        double longtitude = this.getRandomInt(4000000, 5000000) / 1000000;
        String gps = latitude + "N, " + longtitude + "E";
        return gps;
    }

    public boolean equals(Scooter other) {
        return this.id == other.id
                && this.tag == other.tag
                && this.status == other.status
                && this.gpsLocation == other.gpsLocation
                && this.batteryCharge == other.batteryCharge;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setStatus(EStatus status) {
        this.status = status;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setGpsLocation(String gpsLocation) {
        this.gpsLocation = gpsLocation;
    }

    public void setMileage(double mileage) {
        this.mileage = mileage;
    }

    public void setBatteryCharge(int batteryCharge) {
        this.batteryCharge = batteryCharge;
    }

    public long getId() {
        return id;
    }

    public String getTag() {
        return tag;
    }

    public EStatus getStatus() {
        return status;
    }

    public String getGpsLocation() {
        return gpsLocation;
    }

    public double getMileage() {
        return mileage;
    }

    public double getBatteryCharge() {
        return batteryCharge;
    }
}
