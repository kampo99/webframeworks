package com.example.esserver.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.PRECONDITION_FAILED)
public class ScooterConditionFailed extends RuntimeException {
    public ScooterConditionFailed(String message) {
        super(message);
    }
}