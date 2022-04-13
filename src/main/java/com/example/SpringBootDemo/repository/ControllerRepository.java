package com.example.SpringBootDemo.repository;

import com.example.SpringBootDemo.model.Controller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ControllerRepository extends JpaRepository<Controller, Long>, JpaSpecificationExecutor<Controller> {
}