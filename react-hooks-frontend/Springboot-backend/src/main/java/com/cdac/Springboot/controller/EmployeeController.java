package com.cdac.Springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.Springboot.exception.ResourceNotfoundException;
import com.cdac.Springboot.model.Employee;
import com.cdac.Springboot.repository.EmployeeRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/employess")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@GetMapping
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//build create employee rest AID
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//build get employee by REST Api
	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotfoundException("Employee Not exits with Id:"+id));
		return ResponseEntity.ok(employee);
	}
	
	//Build update Employee by Rest Api
	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails){
		
		Employee updateEmployee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotfoundException("Employee Not exits with id"+id));
		updateEmployee.setFirstName(employeeDetails.getFirstName());
		updateEmployee.setLastName(employeeDetails.getLastName());
		updateEmployee.setEmailid(employeeDetails.getEmailid());
		employeeRepository.save(updateEmployee);
		return ResponseEntity.ok(updateEmployee);
		
	}
	
	// build delete employee rest Api
	
	@DeleteMapping("{id}")
	
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotfoundException("Employee not exits with id "+id));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
