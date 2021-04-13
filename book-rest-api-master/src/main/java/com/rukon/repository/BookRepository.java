package com.rukon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rukon.domain.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
