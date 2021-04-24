package com.rukon.person;

import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface PersonRepository extends CrudRepository<Person, Long> {

    Person findById(int id);
    List<Person> findByName(String name);


}
