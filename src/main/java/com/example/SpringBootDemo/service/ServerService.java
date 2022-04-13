package com.example.SpringBootDemo.service;

import com.example.SpringBootDemo.model.Location;
import com.example.SpringBootDemo.model.Server;
import com.example.SpringBootDemo.repository.LocationRepository;
import com.example.SpringBootDemo.repository.ServerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ServerService {
    private ServerRepository serverRepository;
    private LocationRepository locationRepository;


    public List<Server> getServerList() {
        return serverRepository.findAll();
    }

    public Server save(Server server) {
        return serverRepository.save(server);
    }

    public void delete(Long id) {
        serverRepository.deleteById(id);
    }

    public Server get(Long id) {
       return serverRepository.findById(id).orElseGet(Server::new);
    }
}
