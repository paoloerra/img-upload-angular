package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, Long> {
	//Qui dovrebbero essere implementate le custom query
}
