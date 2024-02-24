package com.webTest.crud.entity;

import jakarta.persistence.*;
import lombok.Data;

// To get boiler plate
@Data
// To add query database
@Entity
// Table in database
@Table(name="customer")
public class Customer {
    // Primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String email;

    private String phone;
}
