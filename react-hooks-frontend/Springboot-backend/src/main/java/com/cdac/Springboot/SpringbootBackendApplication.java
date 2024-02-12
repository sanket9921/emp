package com.cdac.Springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cdac.Springboot.model.Employee;
import com.cdac.Springboot.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Sanket");
//		employee.setLastName("gaikwad");
//		employee.setEmailid("sanket@gmail.com");
//		employeeRepository.save(employee);
//		
//		Employee employee2 = new Employee();
//		employee2.setFirstName("aniket");
//		employee2.setLastName("Gaikwad");
//		employee2.setEmailid("aniket@gmail.com");
//		employeeRepository.save(employee2);
	}

}
