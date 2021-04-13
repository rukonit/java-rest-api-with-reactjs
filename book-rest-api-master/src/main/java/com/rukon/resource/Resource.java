package com.rukon.resource;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

public interface Resource<T> {
	@GetMapping
	ResponseEntity<Collection<T>> findAll();
	
	@GetMapping("{id}")
	ResponseEntity<T> findById(@PathVariable Long id);
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	ResponseEntity<T> save(@RequestBody T t);
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	ResponseEntity<T> update(@RequestBody T t);
	
	@DeleteMapping("{id}")
	ResponseEntity<String> deleteById(@PathVariable Long id);
	
	@GetMapping("/invalid")
	ResponseEntity<String> invalid();
}
