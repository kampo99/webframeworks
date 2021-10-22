package com.example.esserver.models;

/**
 * <description of functionality>
 *
 * @author W.Thomas
 */
public class Scooter {
    public int id = 0;
    public String tag = "";
    public String status = "IDLE";
    public String gpsLocation = "";
    public double mileage = 0;
    public double batteryCharge = 0;

    enum EStatus {IDLE, INUSE, MAINTENANCE};

    public Scooter(int id, String tag, String status, String gpsLocation, double mileage, double batteryCharge) {
        this.id = id;
        this.tag = tag;
        this.status = status;
        this.gpsLocation = gpsLocation;
        this.mileage = mileage;
        this.batteryCharge = batteryCharge;
    }

    public Scooter(String tag) {
        this.tag = tag;
    }

    public Scooter createSampleScooter(int pid) {
        int tempId = pid;
        String tempTag = this.randomString(8);
        String tempstatus = this.getEnum();
        String tempGps = this.gpsLocation();
        double tempMileage = this.getRandomInt(0, 10000);
        double tempBattery = this.getRandomInt(5, 100);

        Scooter temp = new Scooter(tempId, tempTag, tempstatus, tempGps, tempMileage, tempBattery);
        return temp;
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
}
