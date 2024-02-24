package com.webTest.crud.repository;

import com.webTest.crud.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{
    // Works as a Data Access layer for interaction with database
    // Provides us methods to perform CRUD operations with the database
}