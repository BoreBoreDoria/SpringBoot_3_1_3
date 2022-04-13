package com.example.SpringBootDemo.model;

import com.example.SpringBootDemo.service.JsonService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.*;

import javax.persistence.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Controller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @Override
    public String toString() {
        return name;
    }

    public String toJson() throws JsonProcessingException {
        return JsonService.convertToJson(this);
    }
}
