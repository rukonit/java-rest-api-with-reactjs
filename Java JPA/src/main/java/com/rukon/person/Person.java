package com.rukon.person;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "Person")
@Data
public class Person {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    protected Person() {}
    private String name;

    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
