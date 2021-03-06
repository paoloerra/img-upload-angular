package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class FileDB {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long file_id;
	private String name;
	private String type;
	@Lob
	private byte[] data;
	
	public FileDB(String name, String type, byte[] data) {
		this.name = name;
		this.type = type;
		this.data = data;
	}
	
	public FileDB() {
		
	}

	public long getId() {
		return file_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}
}
