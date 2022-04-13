package com.example.SpringBootDemo.model;

import com.example.SpringBootDemo.service.JsonService;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.*;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String location;

    @Override
    public String toString() {
        return location;
    }

    public String toJson() throws JsonProcessingException {
        return JsonService.convertToJson(this);
    }
}
