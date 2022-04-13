package com.example.SpringBootDemo.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;

public class JsonService {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static String convertToJson (Object v) throws JsonProcessingException {
        return objectMapper.writeValueAsString(v);
    }
}
