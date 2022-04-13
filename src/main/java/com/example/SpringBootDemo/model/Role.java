package com.example.SpringBootDemo.model;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@AllArgsConstructor
public enum Role implements GrantedAuthority {
    ROLE_USER("Сотрудник"),ROLE_ADMIN("Администратор");

    @Override
    public String getAuthority() {
        return name();
    }

    @Override
    public String toString() {
        return "\"" + name + "\"";
    }

    private String name;

    @JsonValue
    public String getName() {
        return name;
    }
}
