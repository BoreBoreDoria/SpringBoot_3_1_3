package com.example.SpringBootDemo.enumerate;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ServerStatus {
    GOOD("Исправно"),
    NOT_GOOD("Не исправно"),
    IN_REPAIR("На ремонте");


    private String status;

    @JsonValue
    public String getStatus() {
        return status;
    }
}
