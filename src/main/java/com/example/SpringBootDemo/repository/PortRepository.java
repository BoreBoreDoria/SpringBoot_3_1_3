package com.example.SpringBootDemo.repository;

import com.example.SpringBootDemo.model.Port;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PortRepository extends JpaRepository<Port, Long>, JpaSpecificationExecutor<Port> {
}