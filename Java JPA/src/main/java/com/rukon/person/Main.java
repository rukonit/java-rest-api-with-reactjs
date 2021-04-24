package com.rukon.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Scanner;


@SpringBootApplication
public class Main{

    @Autowired
    private PersonRepository repository;

    @Value("${main.sample}")
    String name;


    public static Scanner scanner;
    public static void main(String[] args) {

        SpringApplication.run(Main.class, args);



    }

    @Bean
    public PersonRepository Getit(String... args) throws Exception {
        scanner = new Scanner(System.in);

        System.out.println("The name is " + name);
        System.out.println(repository.findById(3));
        int x;
        String holder = "";
        while(true) {
            x = scanner.nextInt();

            switch (x) {
                case 1:
                    holder = repository.findById(x).getName();
                    System.out.println(holder);
                    continue;
                case 2:
                    System.out.println("You name is: " + holder);
                    continue;
                case 3:
                    break;
                default:
                    continue;
            }
            return null;
        }

    }
//    @Bean
//    public CommandLineRunner demo(PersonRepository repository) {
//        return (args) -> {
//            // save a few customers
//
//
//            System.out.println(repository.findById(2));
//
//        };
//
//    }
}
