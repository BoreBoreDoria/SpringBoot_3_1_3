package com.example.SpringBootDemo.controller;

import com.example.SpringBootDemo.model.Location;
import com.example.SpringBootDemo.model.Server;
import com.example.SpringBootDemo.model.User;
import com.example.SpringBootDemo.repository.LocationRepository;
import com.example.SpringBootDemo.service.ServerService;
import com.example.SpringBootDemo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/rest/admin")
@AllArgsConstructor
public class RestControllerTest {

    private UserService userService;
    private ServerService serverService;


    @PostMapping(value = "/")
    public ResponseEntity<User> create(@RequestBody User user){
        userService.save(user);
        System.out.println(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<User>> getAll(){
        List<User> users = userService.listAll();
        return users != null && !users.isEmpty() ? new ResponseEntity<>(users, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<User> getUser(@PathVariable(name= "id") int id){
        User user = userService.get(id);
        return user != null ? new ResponseEntity<>(user,HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value = "/")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        userService.save(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable(name = "id") int id){
        userService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/server")
    public ResponseEntity<List<Server>> getAllServer(){
        List<Server> serverList = serverService.getServerList();
        return serverList != null && !serverList.isEmpty() ? new ResponseEntity<>(serverList, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/server/{id}")
    public ResponseEntity<User> deleteServer(@PathVariable(name = "id") Long id){
        serverService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "/server")
    public ResponseEntity<Server> updateServer(@RequestBody Server server){
        serverService.save(server);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "/server")
    public ResponseEntity<Server> create(@RequestBody Server server){
        serverService.save(server);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = "server/{id}")
    public ResponseEntity<Server> getUser(@PathVariable(name= "id") Long id){
        Server server = serverService.get(id);
        return server != null ? new ResponseEntity<>(server,HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
