package com.webTest.crud.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.webTest.crud.entity.Customer;
import com.webTest.crud.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerService {
    
    private final CustomerRepository customerRepository;

    // All the methods defined here are called by the controller

    // Post  Method to save the data in database
    public Customer postCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    //  Get all customers from the database
    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    // Get customer by ID
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    // Update customer
    public Customer updateCustomer(Customer customer){
        // Save in DB
        return customerRepository.save(customer);
    }

    // Delete customer
    public void deleteCustomer(Long id){
        customerRepository.deleteById(id);
    }
}
