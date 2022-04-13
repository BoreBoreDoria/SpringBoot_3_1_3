package com.example.SpringBootDemo.repository;

import com.example.SpringBootDemo.model.Server;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ServerRepository extends JpaRepository<Server, Long>, JpaSpecificationExecutor<Server> {
}