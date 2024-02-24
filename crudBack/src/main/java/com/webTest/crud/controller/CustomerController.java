package com.webTest.crud.controller;

import org.springframework.web.bind.annotation.RestController;
import com.webTest.crud.entity.Customer;
import com.webTest.crud.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {
    private final CustomerService customerService;

    // Calls methods in CustomerService File

    // All the APIs should be given in double quotes

    // Post Method
    @PostMapping("/customer")
    public Customer postCustomer(@RequestBody Customer customer){
        return customerService.postCustomer(customer);
    }

    // Get Method
    @GetMapping("/customers")
    private List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable long id) {
        Customer customer = customerService.getCustomerById(id);
        if(customer==null){
            return  ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customer);
    }
    
    @PutMapping("/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable long id, @RequestBody Customer customer){
        Customer existingCustomer = customerService.getCustomerById(id);
        if(existingCustomer==null){
            return ResponseEntity.notFound().build();
        }
        existingCustomer.setName(customer.getName());
        existingCustomer.setEmail(customer.getEmail());
        existingCustomer.setPhone(customer.getPhone());
        Customer updateCustomer = customerService.updateCustomer(existingCustomer);
        return ResponseEntity.ok(updateCustomer);
    }

    @DeleteMapping("/customers/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable long id){
        Customer existingCustomer = customerService.getCustomerById(id);
        if(existingCustomer==null){
            return ResponseEntity.notFound().build();
        }
        customerService.deleteCustomer(id);
        return ResponseEntity.ok().build();
    }
    
}
