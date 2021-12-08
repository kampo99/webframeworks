package com.example.esserver;

import com.example.esserver.models.Scooter;
import com.example.esserver.models.Trip;
import com.example.esserver.repositories.ScootersRepository;
import com.example.esserver.repositories.TripsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootApplication
public class EsServerApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(EsServerApplication.class, args);
    }


    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/scooters").allowedOrigins("http://localhost:4200");
                registry.addMapping("/scooters/{id}").allowedOrigins("http://localhost:4200");
            }
        };
    }

    @Autowired
    private ScootersRepository repo;

    @Autowired
    private TripsRepository trepo;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Running Commandline Startup");
        this.createInitialScooters();
    }

    private void createInitialScooters(){
        List<Scooter> scooters = this.repo.findAll();

        if (scooters != null && scooters.size() > 0) return;
        System.out.println("Configuring some initial scooter data");

        for (int i = 0; i < 8; i++) {
            Scooter scooter = Scooter.createSampleScooter(0);
            Scooter savedScooter = this.repo.save(scooter);
            for (int j = 0; j < 2; j++) {
                Trip trip = Trip.createSampleTrip(savedScooter);
                Trip savedTrip = this.trepo.save(trip);
                savedTrip.associateScooter(savedScooter);
                savedScooter.associateTrip(savedTrip);
                savedScooter.disassociateTrip(savedTrip);
            }
        }
    }



}
