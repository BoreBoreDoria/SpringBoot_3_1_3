package com.example.SpringBootDemo.controller;

import com.example.SpringBootDemo.enumerate.MemoryType;
import com.example.SpringBootDemo.enumerate.MemoryValue;
import com.example.SpringBootDemo.enumerate.ServerStatus;
import com.example.SpringBootDemo.enumerate.SystemType;
import com.example.SpringBootDemo.model.*;
import com.example.SpringBootDemo.repository.ControllerRepository;
import com.example.SpringBootDemo.repository.LocationRepository;
import com.example.SpringBootDemo.repository.PortRepository;
import com.example.SpringBootDemo.service.ServerService;
import com.example.SpringBootDemo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/index")
@AllArgsConstructor
public class AdminController {
    private UserService userService;
    private ServerService serverService;
    private LocationRepository locationRepository;
    private PortRepository portRepository;
    private ControllerRepository controllerRepository;

    @GetMapping
    public ModelAndView allUsers() {
        List<User> users = userService.listAll();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Server> serverList = serverService.getServerList();
        List<Location> locationList = locationRepository.findAll();
        List<Port> portList = portRepository.findAll();
        List<com.example.SpringBootDemo.model.Controller> controllerList = controllerRepository.findAll();
        modelAndView.addObject("authUser", user);
        modelAndView.addObject("users", users);
        modelAndView.addObject("user", new User());
        modelAndView.addObject("serverList", serverList);
        modelAndView.addObject("locationList", locationList);
        modelAndView.addObject("portList", portList);
        modelAndView.addObject("controllerList", controllerList);
        modelAndView.addObject("server", new Server());
        modelAndView.addObject("roles", Role.values());
        modelAndView.addObject("systemType", SystemType.values());
        modelAndView.addObject("memoryType", MemoryType.values());
        modelAndView.addObject("memoryValue", MemoryValue.values());
        modelAndView.addObject("serverStatus", ServerStatus.values());
        return modelAndView;
    }
}
