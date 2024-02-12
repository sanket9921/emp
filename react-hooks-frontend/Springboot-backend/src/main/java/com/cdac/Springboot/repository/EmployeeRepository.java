package com.cdac.Springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.Springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	// all crud database methods

}
