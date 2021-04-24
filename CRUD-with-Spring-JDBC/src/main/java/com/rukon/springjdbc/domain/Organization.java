package com.rukon.springjdbc.domain;


public class Organization {
private int id;
private String companyName;
private int postalCode;
private int yearOfIncorporation;
private int employeeCount;
private String slogan;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public int getYearOfIncorporation() {
        return yearOfIncorporation;
    }

    public void setYearOfIncorporation(int yearOfIncorporation) {
        this.yearOfIncorporation = yearOfIncorporation;
    }

    public int getEmployeeCount() {
        return employeeCount;
    }

    public void setEmployeeCount(int employeeCount) {
        this.employeeCount = employeeCount;
    }

    public String getSlogan() {
        return slogan;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    @Override
    public String toString() {
        return "Organization{" +
                "id=" + id +
                ", companyName='" + companyName + '\'' +
                ", postalCode=" + postalCode +
                ", yearOfIncorporation=" + yearOfIncorporation +
                ", employeeCount=" + employeeCount +
                ", slogan='" + slogan + '\'' +
                '}';
    }
}
