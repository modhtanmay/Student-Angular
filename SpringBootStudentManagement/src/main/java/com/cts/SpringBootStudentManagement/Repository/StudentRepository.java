package com.cts.SpringBootStudentManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.SpringBootStudentManagement.Model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
