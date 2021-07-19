package com.example.demo.service;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.FileDB;
import com.example.demo.repositories.FileDBRepository;

@Service
public class FileStorageService {
	
	@Autowired
	private FileDBRepository fileDBrepository;
	
	public FileDB store(MultipartFile file) throws IOException {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
		return fileDBrepository.save(FileDB);
	}
	
	public FileDB getFile(long id) {
		return fileDBrepository.findById(id).get();
	}
	
	public Stream<FileDB> getAllFiles() {
	    return fileDBrepository.findAll().stream();
	  }

}
