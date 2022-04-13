package com.example.SpringBootDemo.model;

import com.example.SpringBootDemo.enumerate.MemoryType;
import com.example.SpringBootDemo.enumerate.MemoryValue;
import com.example.SpringBootDemo.enumerate.ServerStatus;
import com.example.SpringBootDemo.enumerate.SystemType;
import com.example.SpringBootDemo.service.JsonService;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Server {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;


    private String inventoryNumber;

    private String microshema;

    private String core;

    private Integer coreSpeed;

    private Integer maxValue;

    @ManyToMany(cascade = {CascadeType.MERGE})
    @JoinTable(name = "server_port_types",
            joinColumns = @JoinColumn(name = "server_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "port_types_id", referencedColumnName = "id"))
    private List<Port> ports = new ArrayList<>();

    @ManyToMany(cascade = {CascadeType.MERGE})
    @JoinTable(name = "server_controllers",
            joinColumns = @JoinColumn(name = "server_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "controllers_id", referencedColumnName = "id"))
    private List<Controller> controllers = new ArrayList<>();



    @Enumerated
    @Column(name = "system_type")
    private SystemType systemType;

    @Enumerated
    @Column(name = "memory_type")
    private MemoryType memoryType;

    @Enumerated
    @Column(name = "memory_value")
    private MemoryValue memoryValue;


    private LocalDateTime dateStart;

    private LocalDateTime dateUseStart;

    private Integer useValue;

    @Enumerated
    @Column(name = "server_status")
    private ServerStatus serverStatus;

    private LocalDateTime startRepairDate;

    private String repairInfo;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "location_id")
    private Location location;

    public String toJson() throws JsonProcessingException {
        return JsonService.convertToJson(this);
    }
}
