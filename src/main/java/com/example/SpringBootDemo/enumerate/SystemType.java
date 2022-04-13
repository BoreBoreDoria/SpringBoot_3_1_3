package com.example.SpringBootDemo.enumerate;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum SystemType {
    WINDOWS("Windows"),
    LINUX("Linux");


    private String name;
}
